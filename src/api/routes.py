"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pedido, DetallePedido, Producto, Ingrediente, Producto_x_Tag, Tag
from api.utils import generate_sitemap, APIException, ToObj, ToObj_Array
from api.email_helper import SendTestEmailWithTemplate, SendEmailTemplate

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/alive', methods=['GET'])
def alive():
    response_body = {
        "message": "Alive"
    }
    return jsonify(response_body), 200

@api.route('/email', methods=['GET'])
def emailTest():
    SendTestEmailWithTemplate()
    response_body = {
        "message": "Alive"
    }
    return jsonify(response_body), 200

### PRODUCTO ###
@api.route('/producto', methods=['GET'])
def GetAllProduct():
    productos = list(map(lambda p: p.serialize(), Producto.query.all()))
    return jsonify(productos), 200     

@api.route('/producto/<int:id>', methods=['GET'])
def GetProductById(id):
    producto = Producto.query.get(id)
    if producto is not None:
        return jsonify(producto.serialize(details=True)), 200     
    else:
        return "El producto no existe", 404
### PRODUCTO END ###

### TAG ###
@api.route('/tag', methods=['GET'])
def GetAllTag():
    tags = list(map(lambda p: p.serialize(), Tag.query.all()))
    return jsonify(tags), 200  
### END TAG ###

### USER ###
@api.route('/user/<int:id>', methods=['GET'])
def GetUserById(id):
    user = User.query.get(id)
    if user is not None:
        return jsonify(user.serialize()), 200     
    else:
        return "El user no existe", 404

@api.route('/login', methods=['POST'])
def Login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Usuario o contraseña incorrecta"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "idUser": user.id })

@api.route('/register', methods=['POST'])
def Register():
    newUser = ToObj(request.json, User())
    userExiste = User.query.filter_by(email=newUser.email).first()
    if userExiste is not None:
        # the user was not found on the database
        return jsonify({"msg": "Email ya registrado"}), 409 
    else:
        db.session.add(newUser)
        db.session.commit()
        SendEmailTemplate('bienvenido', newUser.serialize(), newUser.email, f'Bienvenido a Insight Menu {newUser.nombre}!')
        return jsonify({"msg": "Usuario creado!"}), 200 
### USER END###

### PEDIDO ###
@api.route('/pedido', methods=['POST'])
def POST_Pedido():
    # OBTENGO LA INFO DE PEDIDO
    pedido = ToObj(request.json, Pedido())
    # OBTENGO LA INFO DE LOS DETALLES DEL PEDIDO
    detalles = ToObj_Array(request.json.get("detalle", None), DetallePedido())
    if detalles is not None and len(detalles) > 0:    
        # INSERTO EL PEDIDO EN LA BASE DE DATOS PARA OBTENER SU ID
        db.session.add(pedido)
        db.session.commit()

        # RELACIONO LOS DETALLES AL ID DEL PEDIDO RECIEN GENERADO
        for target_list in detalles:
            target_list.idPedido = pedido.id
            db.session.add(target_list)

        #AGREGO LOS DETALLES A LA BASE DE DATOS
        db.session.commit()
        return jsonify(pedido.serialize()), 200
    else:
        return "BadRequest: debe haber detalle", 400
    
### PEDIDO END ###
    