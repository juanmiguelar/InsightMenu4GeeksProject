  
import os
from flask_admin import Admin
from .models import db, User, Pedido, DetallePedido, Producto, Ingrediente, Producto_x_Tag, Tag, ImagenProducto, RecuperarContrasenna
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Pedido, db.session))
    admin.add_view(ModelView(DetallePedido, db.session))
    admin.add_view(ModelView(Producto, db.session))
    admin.add_view(ModelView(Ingrediente, db.session))
    admin.add_view(ModelView(Producto_x_Tag, db.session))
    admin.add_view(ModelView(Tag, db.session))
    admin.add_view(ModelView(ImagenProducto, db.session))
    admin.add_view(ModelView(RecuperarContrasenna, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))