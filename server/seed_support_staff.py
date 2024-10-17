import csv;
from models import db, SupportStaff
from app import app

# This is just a shell/template, need to revisit and actually test

def seed_from_csv():
    SupportStaff.query.delete()
    staff_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for staff_years in csvFile:
                staff = SupportStaff(
                    COMBOKEY=staff_years[0], #this should serve as foreign key connector if possible
                    SCH_NAME=staff_years[1],
                    LEA_NAME=staff_years[2],
                    JJ=staff_years[3],
                    school_year=staff_years[4],
                    SCH_FTETEACH_TOT=staff_years[5],
                    SCH_FTETEACH_CERT=staff_years[6],
                    SCH_FTETEACH_NOTCERT=staff_years[7],
                    SCH_FTECOUNSELORS=staff_years[8],
                    SCH_FTESECURITY_LEO=staff_years[9],
                    SCH_FTESECURITY_GUA=staff_years[10],
                    SCH_FTESERVICES_NUR=staff_years[11],
                    SCH_FTESERVICES_PSY=staff_years[12],
                    SCH_FTESERVICES_SOC=staff_years[13],
                )
                staff_list.append(staff)
    csv_to_db("./seed/.SEED DATA - NY School Support Table.csv")
    db.session.add_all(staff_list[1:])
    db.session.commit()


def seed_manually():
    SupportStaff.query.delete()
    staff_test = [
        SupportStaff(
            COMBOKEY=360000104498, #this should serve as foreign key connector if possible
            SCH_NAME='James A Green High School',
            LEA_NAME='Dolgeville Central School District',
            JJ='No',
            school_year='20-21',
            SCH_FTETEACH_TOT=21,
            SCH_FTETEACH_CERT=21,
            SCH_FTETEACH_NOTCERT=0,
            SCH_FTECOUNSELORS=1,
            SCH_FTESECURITY_LEO=1,
            SCH_FTESECURITY_GUA=0,
            SCH_FTESERVICES_NUR=1,
            SCH_FTESERVICES_PSY=1,
            SCH_FTESERVICES_SOC=0,
            )
            ]
    db.session.add_all(staff_test)
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        seed_from_csv()