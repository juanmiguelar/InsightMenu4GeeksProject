"""empty message

Revision ID: 5dd0b4e5e3c6
Revises: 63a9ac9b55e5
Create Date: 2021-04-28 02:44:57.397487

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5dd0b4e5e3c6'
down_revision = '63a9ac9b55e5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('ingrediente', sa.Column('nombre', sa.String(length=100), nullable=True))
    op.add_column('producto', sa.Column('nombre', sa.String(length=100), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('producto', 'nombre')
    op.drop_column('ingrediente', 'nombre')
    # ### end Alembic commands ###
