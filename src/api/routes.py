"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pedido, DetallePedido, Producto, Ingrediente, Producto_x_Tag, Tag
from api.utils import generate_sitemap, APIException, ToObj

api = Blueprint('api', __name__)

@api.route('/alive', methods=['GET'])
def alive():
    response_body = {
        "message": "Alive"
    }
    return jsonify(response_body), 200

@api.route('/producto', methods=['GET'])
def GetAllProduct():
    productos = list(map(lambda p: p.serialize(), Producto.query.all()))
    return jsonify(productos), 200     

@api.route('/producto/<int:id>', methods=['GET'])
def GetProductById(id):
    producto = Producto.query.get(id)
    if producto is not None:
        return jsonify(producto.serialize()), 200     
    else:
        return "El producto no existe", 404

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
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/test', methods=['POST'])
def test():
    pedido = ToObj(request.json, Pedido())
    db.session.add(pedido)
    db.session.commit()
    return jsonify(pedido.serialize()), 200
    