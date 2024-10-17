"""removed unique constraint from offenses model

Revision ID: dbd9168548f4
Revises: 69de3c4e5853
Create Date: 2024-10-17 16:57:23.400265

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dbd9168548f4'
down_revision = '69de3c4e5853'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('offenses', schema=None) as batch_op:
        batch_op.drop_constraint('uq_offenses_COMBOKEY', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('offenses', schema=None) as batch_op:
        batch_op.create_unique_constraint('uq_offenses_COMBOKEY', ['COMBOKEY'])

    # ### end Alembic commands ###
