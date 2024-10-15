import csv;
from models import db, app, School

# This is just a shell/template, need to revisit and actually test

with app.app_context():
    school_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for schools in csvFile:
                school = School(
                    NCESSCH=schools[0],
                    SURVYEAR=schools[1],
                    STABR=schools[2],
                    LEAID=schools[3],
                    ST_LEAID=schools[4],
                    LSTREET1=schools[5],
                    LZIP=schools[6],
                    LCITY=schools[7],
                    LSTATE=schools[8],
                    NMCNTY=schools[9],
                    LATCOD=schools[10],
                    LONCOD=schools[11],
                    PHONE=schools[12],
                    CHARTER_TEXT=schools[13],
                    VIRTUAL=schools[14],
                    GSLO=schools[15],
                    GSHI=schools[16],
                    SCHOOL_LEVEL=schools[17],
                    SCHOOL_TYPE_TEXT=schools[18],
                    SY_STATUS_TEXT=schools[19],
                    ULOCALE=schools[20],
                )
                school_list.append(school)
    csv_to_db("/filepath")
    db.session.add_all(school_list[1:])