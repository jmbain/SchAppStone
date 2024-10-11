import csv;
from models import db, app, Student, School, Enrollment

# This is just a shell/template, need to revisit and actually test

with app.app_context():
    school_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for schools in csvFile:
                school = School(
                    NCESSCH=school[0],
                    SURVYEAR=school[1],
                    STABR=school[2],
                    SCH_NAME=school[3]
                )
                school_list.append(school)
    csv_to_db("/filepath")
    db.session.add_all(school_list[1:])