import csv;
from models import db, Enrollment
from app import app

# This is just a shell/template, need to revisit and actually test

def seed_from_csv():
    Enrollment.query.delete()
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
    csv_to_db("./seed/.SEED DATA - NY Enrollment Table.csv")
    db.session.add_all(enrollment_list[1:])
    db.session.commit()

# manual seeding can be used for troubleshooting errors
# def seed_manually():
#     Enrollment.query.delete()

#     enrollments = [
#         Enrollment(OBJECTID=50930,
#                     NCESSCH=360016205855, # note this is like a foreign key to schools and can be used for cross checks 
#                     SURVYEAR='2019-2020',
#                     TOTFRL=587,
#                     FRELCH=544,
#                     REDLCH=43,
#                     PK=0,
#                     KG=73,
#                     G01=75,
#                     G02=76,
#                     G03=75,
#                     G04=73,
#                     G05=71,
#                     G06=69,
#                     G07=77,
#                     G08=56,
#                     G09=0,
#                     G10=0,
#                     G11=0,
#                     G12=0,
#                     G13=0,
#                     TOTMENROL=276,
#                     TOTFENROL=369,
#                     TOTAL=645,
#                     FTE=37.95,
#                     STUTERATIO=16.99604743,
#                 ),
#                 ]
#     print(enrollments)
#     db.session.add_all(enrollments)
#     db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        seed_from_csv()