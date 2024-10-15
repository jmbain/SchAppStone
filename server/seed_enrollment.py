import csv;
from models import db, Enrollment
from app import app

# This is just a shell/template, need to revisit and actually test

with app.app_context():
    enrollment_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for enrollment_years in csvFile:
                enrollment_year = Enrollment(
                    OBJECTID=enrollment_years[0],
                    NCESSCH=enrollment_years[1], # note this is like a foreign key to schools and can be used for cross checks 
                    SURVYEAR=enrollment_years[2],
                    TOTFRL=enrollment_years[3],
                    FRELCH=enrollment_years[4],
                    REDLCH=enrollment_years[5],
                    PK=enrollment_years[6],
                    KG=enrollment_years[7],
                    G01=enrollment_years[8],
                    G02=enrollment_years[9],
                    G03=enrollment_years[10],
                    G04=enrollment_years[11],
                    G05=enrollment_years[12],
                    G06=enrollment_years[13],
                    G07=enrollment_years[14],
                    G08=enrollment_years[15],
                    G09=enrollment_years[16],
                    G10=enrollment_years[17],
                    G11=enrollment_years[18],
                    G12=enrollment_years[19],
                    G13=enrollment_years[20],
                    TOTMENROL=enrollment_years[21],
                    TOTFENROL=enrollment_years[22],
                    TOTAL=enrollment_years[23],
                    FTE=enrollment_years[24],
                    STUTERATIO=enrollment_years[25],
                )
                enrollment_list.append(enrollment_year)
    csv_to_db("./seed/.SEED DATA - NY Enrollmnet Table.csv")
    db.session.add_all(enrollment_list[1:])