#Flask and sqlalchemy imports
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from flask_bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

# init sqlalchemy object and bcrypt plugin
db = SQLAlchemy(metadata=MetaData(naming_convention=convention))

# create exception classes for validation
class ApplicationException(Exception):
    pass

class StudentException(Exception):
    pass

#____ DATA MODELS ____
class School(db.Model, SerializerMixin):
    __tablename__ = 'schools'

    #school identification and administration attributes
    id = db.Column(db.Integer, primary_key=True)
    NCESSCH = db.Column(db.Integer, unique=True)
    SCH_NAME = db.Column(db.String)
    LEAID = db.Column(db.String) # LEA means Local Education Agency
    ST_LEAID = db.Column(db.String)
    LEA_NAME = db.Column(db.String)

    #school location and contact attributes
    # STABR = db.Column(db.String) # State Abbreviation e.g. NY
    LSTREET1 = db.Column(db.String)
    LZIP = db.Column(db.String) # Ben says zip codes are always strings "are you doing math on it? if no, then probably a string"
    LCITY = db.Column(db.String)
    LSTATE = db.Column(db.String) #Potentially remove, duplicate with STABR?
    NMCNTY = db.Column(db.String) #County
    LATCOD = db.Column(db.Float) #Latitude
    LONCOD = db.Column(db.Float) #Longitude
    PHONE = db.Column(db.String)

    #other school attributes, revisit grouping
    CHARTER_TEXT = db.Column(db.Integer) # 1 is Yes, 2 is No
    VIRTUAL = db.Column(db.String)
    GSLO = db.Column(db.String) # Grade served low 
    GSHI = db.Column(db.String) # Grade served high
    SCHOOL_LEVEL = db.Column(db.String) # Elementary, Middle, High, Other
    SCHOOL_TYPE_TEXT = db.Column(db.String) # Regular, Special Ed, Alternative Ed, Career and Technical School
    # STATUS = db.Column(db.String) 
    SY_STATUS_TEXT = db.Column(db.String) # use in lieu of Status above because this has text/description and some are not coded to numbers...
    ULOCALE = db.Column(db.String)

    #relationships
    applications = db.relationship('Application', back_populates="school")
    annual_enrollment = db.relationship('Enrollment', back_populates="school")
    support_staff = db.relationship("SupportStaff", back_populates="school")
    # user = db.relationship('User', back_populates="school")
    serialize_rules = ['-applications', '-annual_enrollment.school', '-support_staff.school'] 

class Enrollment(db.Model, SerializerMixin):
    __tablename__ = 'annual_enrollment'

    #general attributes
    id = db.Column(db.Integer, primary_key=True)
    NCESSCH = db.Column(db.Integer, db.ForeignKey("schools.NCESSCH"))
    OBJECTID = db.Column(db.Integer) # Government's unique ID...
    SURVYEAR = db.Column(db.String) # Survey Year, e.g. 2019-2020

    #enrollment attributes, free and reduced lunch
    TOTFRL = db.Column(db.Integer) # Total Free and Reduced Lunch
    FRELCH = db.Column(db.Integer) # Free lunch
    REDLCH = db.Column(db.Integer) # Reduced lunch
    
    #enrollment attributes, student count by grade
    PK = db.Column(db.Integer)
    KG = db.Column(db.Integer)
    G01 = db.Column(db.Integer)
    G02 = db.Column(db.Integer)
    G03 = db.Column(db.Integer)
    G04 = db.Column(db.Integer)
    G05 = db.Column(db.Integer)
    G06 = db.Column(db.Integer)
    G07 = db.Column(db.Integer)
    G08 = db.Column(db.Integer)
    G09 = db.Column(db.Integer)
    G10 = db.Column(db.Integer)
    G11 = db.Column(db.Integer)
    G12 = db.Column(db.Integer)
    G13 = db.Column(db.Integer)
    
    #other enrollment attributes
    TOTMENROL = db.Column(db.Integer)
    TOTFENROL = db.Column(db.Integer)
    TOTAL = db.Column(db.Integer)
    FTE = db.Column(db.Float)
    STUTERATIO = db.Column(db.Float)

    #relationships
    school = db.relationship('School', back_populates="annual_enrollment")
    serialize_rules = ['-school'] 

class SupportStaff(db.Model, SerializerMixin):
    __tablename__ = 'support_staff'

    id = db.Column(db.Integer, primary_key=True)
    COMBOKEY = db.Column(db.Integer, db.ForeignKey("schools.NCESSCH")) # Confirmed that in most cases, this matches the NCESSH from the other School table
    SCH_NAME = db.Column(db.String) #Keeping this to run checks and confirm COMBOKEY is mapped right
    LEA_NAME = db.Column(db.String) #Keeping this to run checks and confirm COMBOKEY is mapped right
    JJ = db.Column(db.String) #Potentially remove... duplicative?

    #JB Added
    school_year = db.Column(db.String) #JB note: files are annual basis, need to label before uploading

    #quantititive attributes
    SCH_FTETEACH_TOT = db.Column(db.Float)
    SCH_FTETEACH_CERT = db.Column(db.Float)
    SCH_FTETEACH_NOTCERT = db.Column(db.Float)
    # SCH_FTETEACH_FY = db.Column(db.Float) #Commenting out because data exists up until 17-18, exluded from 20-21
    # SCH_FTETEACH_SY = db.Column(db.Float) #Commenting out because data exists up until 17-18, exluded from 20-21
    # SCH_TEACHERS_CURR_TOT = db.Column(db.Integer) #Commenting out because data exists up until 17-18, exluded from 20-21
    # SCH_TEACHERS_PREV_TOT = db.Column(db.Integer) #Commenting out because data exists up until 17-18, exluded from 20-21
    # SCH_FTETEACH_ABSENT = db.Column(db.Float) #Commenting out because data exists up until 17-18, exluded from 20-21
    SCH_FTECOUNSELORS = db.Column(db.Float)
    SCH_FTESECURITY_LEO = db.Column(db.Float)
    SCH_FTESECURITY_GUA = db.Column(db.Float)
    SCH_FTESERVICES_NUR = db.Column(db.Float)
    SCH_FTESERVICES_PSY = db.Column(db.Float)
    SCH_FTESERVICES_SOC = db.Column(db.Float)

    #relationships NEED TO REVISIT
    school = db.relationship('School', back_populates="support_staff")
    serialize_rules = ['-school'] 

class Offenses(db.Model, SerializerMixin):
    __tablename__ = 'offenses'

    id = db.Column(db.Integer, primary_key=True)
    COMBOKEY = db.Column(db.Integer, db.ForeignKey("schools.NCESSCH"), unique=True) # Confirmed that in most cases, this matches the NCESSH from the other School table
    SCH_NAME = db.Column(db.String) #Keeping this to run checks and confirm COMBOKEY is mapped right
    LEA_NAME = db.Column(db.String) #Keeping this to run checks and confirm COMBOKEY is mapped right
    JJ = db.Column(db.String) #Potentially remove... duplicative?

    #JB added
    school_year = db.Column(db.String) #JB note: files are annual basis, need to label before uploading

    #quantitative attributes
    SCH_FIREARM_IND = db.Column(db.Integer) 
    SCH_HOMICIDE_IND = db.Column(db.Integer) 
    SCH_OFFENSE_RAPE = db.Column(db.Integer) 
    SCH_OFFENSE_BATT = db.Column(db.Integer) 
    SCH_OFFENSE_ROBWW = db.Column(db.Integer) 
    SCH_OFFENSE_ROBWOW = db.Column(db.Integer) 
    SCH_OFFENSE_ATTWW = db.Column(db.Integer) 
    SCH_OFFENSE_ATTWOW = db.Column(db.Integer)
    SCH_OFFENSE_THRWW = db.Column(db.Integer) 
    SCH_OFFENSE_THRWOW = db.Column(db.Integer) 
    SCH_OFFENSE_POSSWX = db.Column(db.Integer) 

    #relationships NEED TO REVISIT
    # school = db.relationship('Enrollment', back_populates="school")
    # serialize_rules = ['-school.annual_enrollment'] 

class Student(db.Model, SerializerMixin):
    __tablename__ = 'students'

    __table_args__ = (db.CheckConstraint('age >= 0', name='ck_age_not_neg'), )

    # define columns on our table
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    dob = db.Column(db.Date, nullable=False) 
    user_relationship = db.Column(db.String, nullable=False) # need to validate, options are Mother, Father, Specify Other Guardian ___
    age = db.Column(db.Integer) # Might be optional because can be calculated from DOB
    expected_grade_level = db.Column(db.String) # PreK, Kindergarten, 1st grade, etc.
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # fk for for users, i.e. parents

    # relationship needs the class name (as a str)
    user = db.relationship('User', back_populates='students')
    applications = db.relationship('Application', back_populates='student')

    # serialization rules
    serialize_rules = ('-user', '-applications') # -owner_id is optiona
    # serialize_only = ['name']

# this is fine to keep for now, student age should not be less than 0...
    @validates('age')
    def validates_age(self, key, new_age):
        if new_age < 0:
            raise StudentException('age cannot be negative')
        return new_age  # similar to self._age = new_age

    def __repr__(self) -> str:
        return f'<Student {self.id} {self.first_name} {self.last_name} {self.age} {self.expected_grade_level}>'
    
class Application(db.Model, SerializerMixin):
    __tablename__ = 'applications'

    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id')) 
    school_id = db.Column(db.String, db.ForeignKey('schools.id')) # for now, Alpha School, Beta School, etc
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_signature = db.Column(db.String, nullable=False) # user types name, validate matches name from user_id pulled from users table

    student = db.relationship('Student', back_populates='applications')
    user = db.relationship('User', back_populates='applications')
    school = db.relationship('School', back_populates='applications')

    serialize_rules = ['-student.applications', '-user.applications', '-school.applications']

    #TBD Not sure this repr will be backwards compatible with students relationship...
    def __repr__(self) -> str:
        return f'<Application {self.id} Name: {self.student.first_name} {self.student.last_name} School: {self.school.school_name}>'


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password_hash = db.Column(db.String)
    user_type = db.Column(db.String, nullable=False) # Applicant vs Staff
    staff_type = db.Column(db.String, nullable=True) # General vs Priveleged
    
    #current thinking is this should be for staff users i.e. a staff should have 1 school... commenting out for now
    # school_id = db.Column(db.String, db.ForeignKey('schools.id')) 


    students = db.relationship('Student', back_populates="user")
    applications = db.relationship('Application', back_populates="user")
    # school = db.relationship('School', back_populates='user')

    serialize_rules = ['-password_hash', '-applications', '-students']

    def __repr__(self) -> str:
        return f'<User {self.id} {self.username}>'