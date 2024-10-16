import csv;
from models import db, School
from app import app

# This is just a shell/template, need to revisit and actually test

def seed_from_csv():
    School.query.delete()
    school_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for schools in csvFile:
                school = School(
                    NCESSCH=schools[0],
                    LEAID=schools[1],
                    ST_LEAID=schools[2],
                    LEA_NAME=schools[3],
                    SCH_NAME=schools[4],
                    LSTREET1=schools[5],
                    LCITY=schools[6],
                    LSTATE=schools[7],
                    LZIP=schools[8],
                    PHONE=schools[9],
                    CHARTER_TEXT=schools[10],
                    VIRTUAL=schools[11],
                    GSLO=schools[12],
                    GSHI=schools[13],
                    SCHOOL_LEVEL=schools[14],
                    SCHOOL_TYPE_TEXT=schools[15],
                    SY_STATUS_TEXT=schools[16],
                    ULOCALE=schools[17],
                    NMCNTY=schools[18],
                    LATCOD=schools[19],
                    LONCOD=schools[20]
                )
                school_list.append(school)
    csv_to_db("./seed/.SEED DATA - NY Schools Table.csv")
    db.session.add_all(school_list[1:])
    db.session.commit()
        
# manual seeding can be used for troubleshooting errors
# def seed_manually():
#     School.query.delete()

#     schools = [
#         School(NCESSCH=360000104540,
#                 LEAID=3600001,
#                 ST_LEAID='NY-211003040000',
#                 LEA_NAME='DOLGEVILLE CENTRAL SCHOOL DISTRICT',
#                 SCH_NAME='DOLGEVILLE ELEMENTARY SCHOOL',
#                 LSTREET1='38 SLAWSON ST',
#                 LCITY='DOLGEVILLE',
#                 LSTATE='NY',
#                 LZIP='13329',
#                 PHONE='(315)429-3155',
#                 CHARTER_TEXT='No',
#                 VIRTUAL='Not Virtual',
#                 GSLO='PK',
#                 GSHI='6',
#                 SCHOOL_LEVEL='Elementary',
#                 SCHOOL_TYPE_TEXT='Regular School',
#                 SY_STATUS_TEXT='Currently operational',
#                 ULOCALE='42-Rural: Distant',
#                 NMCNTY='Herkimer County',
#                 LATCOD=43.104,
#                 LONCOD=-74.779),
#                 ]

#     db.session.add_all(schools)
#     db.session.commit()



if __name__ == '__main__':
    with app.app_context():
        seed_from_csv()