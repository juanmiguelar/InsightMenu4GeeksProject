"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pedido, DetallePedido, Producto, Ingrediente, Producto_x_Tag, Tag
from api.utils import generate_sitemap, APIException

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