import csv;
from models import db, app, Enrollment

# This is just a shell/template, need to revisit and actually test

with app.app_context():
    enrollment_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for enrollment_years in csvFile:
                enrollment_year = Enrollment(
                    school_id=enrollment_years[0],
                    SURVYEAR=enrollment_years[1],
                    STABR=enrollment_years[2],
                    PK=enrollment_years[3],
                    KG=enrollment_years[4],
                    G01=enrollment_years[5],
                    G02=enrollment_years[6],
                    G03=enrollment_years[7],
                    G04=enrollment_years[8],
                    G05=enrollment_years[9],
                    G06=enrollment_years[10],
                    G07=enrollment_years[11],
                    G08=enrollment_years[12],
                    G09=enrollment_years[13],
                    G10=enrollment_years[14],
                    G11=enrollment_years[15],
                    G12=enrollment_years[16],
                    G13=enrollment_years[17],
                    TOTMENROL=enrollment_years[18],
                    TOTFENROL=enrollment_years[19],
                    TOTAL=enrollment_years[20],
                    FTE=enrollment_years[21],
                    STUTERATIO=enrollment_years[22],
                )
                enrollment_list.append(enrollment_year)
    csv_to_db("/filepath")
    db.session.add_all(enrollment_list[1:])