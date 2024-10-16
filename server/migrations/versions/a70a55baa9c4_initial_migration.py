"""initial migration

Revision ID: a70a55baa9c4
Revises: 
Create Date: 2024-10-16 11:24:51.830484

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a70a55baa9c4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('schools',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('NCESSCH', sa.Integer(), nullable=True),
    sa.Column('OBJECTID', sa.Integer(), nullable=True),
    sa.Column('SCH_NAME', sa.String(), nullable=True),
    sa.Column('LEAID', sa.String(), nullable=True),
    sa.Column('ST_LEAID', sa.String(), nullable=True),
    sa.Column('LEA_NAME', sa.String(), nullable=True),
    sa.Column('LSTREET1', sa.String(), nullable=True),
    sa.Column('LZIP', sa.String(), nullable=True),
    sa.Column('LCITY', sa.String(), nullable=True),
    sa.Column('LSTATE', sa.String(), nullable=True),
    sa.Column('NMCNTY', sa.String(), nullable=True),
    sa.Column('LATCOD', sa.Float(), nullable=True),
    sa.Column('LONCOD', sa.Float(), nullable=True),
    sa.Column('PHONE', sa.String(), nullable=True),
    sa.Column('CHARTER_TEXT', sa.Integer(), nullable=True),
    sa.Column('VIRTUAL', sa.String(), nullable=True),
    sa.Column('GSLO', sa.String(), nullable=True),
    sa.Column('GSHI', sa.String(), nullable=True),
    sa.Column('SCHOOL_LEVEL', sa.String(), nullable=True),
    sa.Column('SCHOOL_TYPE_TEXT', sa.String(), nullable=True),
    sa.Column('SY_STATUS_TEXT', sa.String(), nullable=True),
    sa.Column('ULOCALE', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_schools')),
    sa.UniqueConstraint('NCESSCH', name=op.f('uq_schools_NCESSCH')),
    sa.UniqueConstraint('OBJECTID', name=op.f('uq_schools_OBJECTID'))
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('password_hash', sa.String(), nullable=True),
    sa.Column('user_type', sa.String(), nullable=False),
    sa.Column('staff_type', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_users')),
    sa.UniqueConstraint('username', name=op.f('uq_users_username'))
    )
    op.create_table('annual_enrollment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('school_id', sa.Integer(), nullable=True),
    sa.Column('OBJECTID', sa.Integer(), nullable=True),
    sa.Column('SURVYEAR', sa.String(), nullable=True),
    sa.Column('TOTFRL', sa.Integer(), nullable=True),
    sa.Column('FRELCH', sa.Integer(), nullable=True),
    sa.Column('REDLCH', sa.Integer(), nullable=True),
    sa.Column('PK', sa.Integer(), nullable=True),
    sa.Column('KG', sa.Integer(), nullable=True),
    sa.Column('G01', sa.Integer(), nullable=True),
    sa.Column('G02', sa.Integer(), nullable=True),
    sa.Column('G03', sa.Integer(), nullable=True),
    sa.Column('G04', sa.Integer(), nullable=True),
    sa.Column('G05', sa.Integer(), nullable=True),
    sa.Column('G06', sa.Integer(), nullable=True),
    sa.Column('G07', sa.Integer(), nullable=True),
    sa.Column('G08', sa.Integer(), nullable=True),
    sa.Column('G09', sa.Integer(), nullable=True),
    sa.Column('G10', sa.Integer(), nullable=True),
    sa.Column('G11', sa.Integer(), nullable=True),
    sa.Column('G12', sa.Integer(), nullable=True),
    sa.Column('G13', sa.Integer(), nullable=True),
    sa.Column('TOTMENROL', sa.Integer(), nullable=True),
    sa.Column('TOTFENROL', sa.Integer(), nullable=True),
    sa.Column('TOTAL', sa.Integer(), nullable=True),
    sa.Column('FTE', sa.Float(), nullable=True),
    sa.Column('STUTERATIO', sa.Float(), nullable=True),
    sa.ForeignKeyConstraint(['school_id'], ['schools.NCESSCH'], name=op.f('fk_annual_enrollment_school_id_schools')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_annual_enrollment')),
    sa.UniqueConstraint('OBJECTID', name=op.f('uq_annual_enrollment_OBJECTID')),
    sa.UniqueConstraint('school_id', name=op.f('uq_annual_enrollment_school_id'))
    )
    op.create_table('offenses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('COMBOKEY', sa.Integer(), nullable=True),
    sa.Column('SCH_NAME', sa.String(), nullable=True),
    sa.Column('LEA_NAME', sa.String(), nullable=True),
    sa.Column('JJ', sa.String(), nullable=True),
    sa.Column('school_year', sa.String(), nullable=True),
    sa.Column('SCH_FIREARM_IND', sa.Integer(), nullable=True),
    sa.Column('SCH_HOMICIDE_IND', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_RAPE', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_BATT', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_ROBWW', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_ROBWOW', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_ATTWW', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_ATTWOW', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_THRWW', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_THRWOW', sa.Integer(), nullable=True),
    sa.Column('SCH_OFFENSE_POSSWX', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['COMBOKEY'], ['schools.NCESSCH'], name=op.f('fk_offenses_COMBOKEY_schools')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_offenses')),
    sa.UniqueConstraint('COMBOKEY', name=op.f('uq_offenses_COMBOKEY'))
    )
    op.create_table('students',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=False),
    sa.Column('last_name', sa.String(), nullable=False),
    sa.Column('dob', sa.Date(), nullable=False),
    sa.Column('user_relationship', sa.String(), nullable=False),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('expected_grade_level', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.CheckConstraint('age >= 0', name=op.f('ck_students_ck_age_not_neg')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_students_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_students'))
    )
    op.create_table('support_staff',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('COMBOKEY', sa.Integer(), nullable=True),
    sa.Column('SCH_NAME', sa.String(), nullable=True),
    sa.Column('LEA_NAME', sa.String(), nullable=True),
    sa.Column('JJ', sa.String(), nullable=True),
    sa.Column('school_year', sa.String(), nullable=True),
    sa.Column('SCH_FTETEACH_TOT', sa.Float(), nullable=True),
    sa.Column('SCH_FTETEACH_CERT', sa.Float(), nullable=True),
    sa.Column('SCH_FTETEACH_NOTCERT', sa.Float(), nullable=True),
    sa.Column('SCH_FTECOUNSELORS', sa.Float(), nullable=True),
    sa.Column('SCH_FTESECURITY_LEO', sa.Float(), nullable=True),
    sa.Column('SCH_FTESECURITY_GUA', sa.Float(), nullable=True),
    sa.Column('SCH_FTESERVICES_NUR', sa.Float(), nullable=True),
    sa.Column('SCH_FTESERVICES_PSY', sa.Float(), nullable=True),
    sa.Column('SCH_FTESERVICES_SOC', sa.Float(), nullable=True),
    sa.ForeignKeyConstraint(['COMBOKEY'], ['schools.NCESSCH'], name=op.f('fk_support_staff_COMBOKEY_schools')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_support_staff')),
    sa.UniqueConstraint('COMBOKEY', name=op.f('uq_support_staff_COMBOKEY'))
    )
    op.create_table('applications',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.Column('school_id', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('user_signature', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['school_id'], ['schools.id'], name=op.f('fk_applications_school_id_schools')),
    sa.ForeignKeyConstraint(['student_id'], ['students.id'], name=op.f('fk_applications_student_id_students')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_applications_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_applications'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('applications')
    op.drop_table('support_staff')
    op.drop_table('students')
    op.drop_table('offenses')
    op.drop_table('annual_enrollment')
    op.drop_table('users')
    op.drop_table('schools')
    # ### end Alembic commands ###
