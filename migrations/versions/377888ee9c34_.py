"""empty message

Revision ID: 377888ee9c34
Revises: 
Create Date: 2021-05-07 00:43:39.436557

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '377888ee9c34'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=25), nullable=True),
    sa.Column('descripcion', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tipo', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('telefono', sa.String(length=80), nullable=True),
    sa.Column('direccion', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('pedido',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idUserParticular', sa.Integer(), nullable=False),
    sa.Column('idUserEmpresarial', sa.Integer(), nullable=False),
    sa.Column('fechaCreacion', sa.DateTime(), nullable=False),
    sa.Column('total', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['idUserEmpresarial'], ['user.id'], ),
    sa.ForeignKeyConstraint(['idUserParticular'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idUserEmpresarial', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=100), nullable=True),
    sa.Column('precio', sa.Integer(), nullable=False),
    sa.Column('descripcion', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['idUserEmpresarial'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('detalle_pedido',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idPedido', sa.Integer(), nullable=False),
    sa.Column('idProducto', sa.Integer(), nullable=False),
    sa.Column('cantidad', sa.Integer(), nullable=False),
    sa.Column('subTotal', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['idPedido'], ['pedido.id'], ),
    sa.ForeignKeyConstraint(['idProducto'], ['producto.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('imagen_producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idProducto', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=500), nullable=True),
    sa.Column('esPrincipal', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['idProducto'], ['producto.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('ingrediente',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idProducto', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=100), nullable=True),
    sa.Column('orden', sa.Integer(), nullable=False),
    sa.Column('descripcion', sa.String(length=500), nullable=True),
    sa.Column('gramos', sa.Integer(), nullable=False),
    sa.Column('calorias', sa.Integer(), nullable=False),
    sa.Column('preparacion', sa.String(length=500), nullable=True),
    sa.Column('azucar', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['idProducto'], ['producto.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('producto_x__tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('idProducto', sa.Integer(), nullable=False),
    sa.Column('idTag', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['idProducto'], ['producto.id'], ),
    sa.ForeignKeyConstraint(['idTag'], ['tag.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('producto_x__tag')
    op.drop_table('ingrediente')
    op.drop_table('imagen_producto')
    op.drop_table('detalle_pedido')
    op.drop_table('producto')
    op.drop_table('pedido')
    op.drop_table('user')
    op.drop_table('tag')
    # ### end Alembic commands ###
