from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(20), nullable=False)
    tipo = db.Column(db.String(20), nullable=False, default="particular")
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    telefono = db.Column(db.String(80), nullable=True)
    direccion = db.Column(db.String(500), nullable=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "nombre":self.nombre,
            "tipo": self.tipo,
            "email": self.email,
            "telefono": self.telefono,
            "direccion": self.direccion,
            # do not serialize the password, its a security breach
        }

class Pedido(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idUserParticular = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    idUserEmpresarial = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    fechaCreacion = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    total = db.Column(db.Integer, nullable=False)

    userParticular = db.relationship("User", lazy='subquery', foreign_keys=[idUserParticular], backref=db.backref("Pedido.UserParticular", cascade="all,delete"))
    userEmpresarial = db.relationship("User", lazy='subquery', foreign_keys=[idUserEmpresarial], backref=db.backref("Pedido.UserEmpresarial", cascade="all,delete"))

    def __repr__(self):
        return '<Pedido %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "idUserParticular": self.idUserParticular,
            "idUserEmpresarial": self.idUserEmpresarial,
            "fechaCreacion": self.fechaCreacion,
            "total": self.total
        }

class DetallePedido(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    idPedido = db.Column(db.Integer, db.ForeignKey('pedido.id'), nullable=False)
    idProducto = db.Column(db.Integer, db.ForeignKey('producto.id'), nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)
    subTotal = db.Column(db.Integer, nullable=False)

    pedido = db.relationship("Pedido", lazy='subquery', backref=db.backref("DetallePedido", cascade="all,delete"))
    producto = db.relationship("Producto", lazy='subquery', backref=db.backref("DetallePedido", cascade="all,delete"))

    def __repr__(self):
        return '<DetallePedido %r>' % self.id
    
    def instance(self):
        return DetallePedido()

    def serialize(self):
        return {
            "id": self.id,
            "idPedido": self.idPedido,
            "idProducto": self.idProducto,
            "cantidad": self.cantidad,
            "subTotal": self.subTotal,
        }

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idUserEmpresarial = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    nombre = db.Column(db.String(100), nullable=True)
    precio = db.Column(db.Integer, nullable=False)
    descripcion = db.Column(db.String(500), nullable=True)

    userEmpresarial = db.relationship("User", lazy='subquery', backref=db.backref("Producto", cascade="all,delete"))

    def __repr__(self):
        return '<Producto %r>' % self.nombre

    def serialize(self, details = False):
        imgPrincipal = list(filter(lambda x: x.esPrincipal, ImagenProducto.query.filter_by(idProducto=self.id)))
        tags = list(map(lambda p: p.serialize(), Producto_x_Tag.query.filter_by(idProducto=self.id)))
        if not details:
            return {
                "id": self.id,
                "idUserEmpresarial": self.idUserEmpresarial,
                "nombre": self.nombre,
                "precio": self.precio,
                "descripcion": self.descripcion,
                "img": imgPrincipal[0].url if len(imgPrincipal) > 0 else "",
                "tags": tags
            }
        else:
            imagenes = list(map(lambda p: p.serialize(), ImagenProducto.query.filter_by(idProducto=self.id)))
            ingredientes = list(map(lambda p: p.serialize(), Ingrediente.query.filter_by(idProducto=self.id)))
            return {
                "id": self.id,
                "idUserEmpresarial": self.idUserEmpresarial,
                "nombre": self.nombre,
                "precio": self.precio,
                "descripcion": self.descripcion,
                "img": imgPrincipal[0].url if len(imgPrincipal) > 0 else "",
                "imagenes": imagenes,
                "ingredientes": ingredientes,
                "tags": tags,
            }

class ImagenProducto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idProducto = db.Column(db.Integer, db.ForeignKey('producto.id'), nullable=False)
    url = db.Column(db.String(500), nullable=True)
    esPrincipal = db.Column(db.Boolean, nullable=False, default=False)

    producto = db.relationship("Producto", lazy='subquery', backref=db.backref("ImagenProducto", cascade="all,delete"))
    def __repr__(self):
        return '<ImagenProducto %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "idProducto": self.idProducto,
            "url": self.url,
            "esPrincipal": self.esPrincipal
        }

class Ingrediente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idProducto = db.Column(db.Integer, db.ForeignKey('producto.id'), nullable=False)
    nombre = db.Column(db.String(100), nullable=True)
    orden = db.Column(db.Integer, nullable=False)
    descripcion = db.Column(db.String(500), nullable=True)
    gramos = db.Column(db.Integer, nullable=False)
    calorias = db.Column(db.Integer, nullable=False)
    preparacion = db.Column(db.String(500), nullable=True)
    azucar = db.Column(db.Integer, nullable=False)

    producto = db.relationship("Producto", lazy='subquery', backref=db.backref("Ingrediente", cascade="all,delete"))

    def __repr__(self):
        return '<Ingrediente %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "idProducto": self.idProducto,
            "nombre": self.nombre,
            "orden": self.orden,
            "descripcion": self.descripcion,
            "gramos": self.gramos,
            "calorias": self.calorias,
            "preparacion": self.preparacion,
            "azucar": self.azucar
        }

class Producto_x_Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idProducto = db.Column(db.Integer, db.ForeignKey('producto.id'), nullable=False)
    idTag = db.Column(db.Integer, db.ForeignKey('tag.id'), nullable=False)

    producto = db.relationship("Producto", lazy='subquery', backref=db.backref("Producto_x_Tag", cascade="all,delete"))
    tag = db.relationship("Tag", lazy='subquery', backref=db.backref("Producto_x_Tag", cascade="all,delete"))

    def __repr__(self):
        return '<Producto_x_Tag %r>' % self.tag.nombre

    def serialize(self):
        return {
            "id": self.tag.id,
            "nombre": self.tag.nombre,
            "descripcion": self.tag.descripcion,
        }

class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(25), nullable=True)
    descripcion = db.Column(db.String(50), nullable=True)

    def __repr__(self):
        return '<Tag %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion
        }

class RecuperarContrasenna(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    codigo = db.Column(db.String(100), nullable=True)

    def __repr__(self):
        return '<RecuperarContrasenna %r>' % self.codigo

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "codigo": self.codigo
        }