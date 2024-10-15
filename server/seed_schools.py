import csv;
from models import db, School
from app import app

# This is just a shell/template, need to revisit and actually test

with app.app_context():
    school_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for schools in csvFile:
                school = School(
                    NCESSCH=schools[0],
                    STABR=schools[1],
                    LEAID=schools[2],
                    ST_LEAID=schools[3],
                    LEA_NAME=schools[4],
                    SCH_NAME=schools[5],
                    LSTREET1=schools[6],
                    LCITY=schools[7],
                    LSTATE=schools[8],
                    LZIP=schools[9],
                    PHONE=schools[10],
                    CHARTER_TEXT=schools[11],
                    VIRTUAL=schools[12],
                    GSLO=schools[13],
                    GSHI=schools[14],
                    SCHOOL_LEVEL=schools[15],
                    SCHOOL_TYPE_TEXT=schools[16],
                    SY_STATUS_TEXT=schools[17],
                    ULOCALE=schools[18],
                    NMCNTY=schools[19],
                    LATCOD=schools[20],
                    LONCOD=schools[21]
                )
                school_list.append(school)
    csv_to_db("./seed/.SEED DATA - NY Schools Table.csv")
    db.session.add_all(school_list[1:])