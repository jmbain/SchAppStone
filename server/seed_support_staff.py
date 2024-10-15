import csv;
from models import db, app, SupportStaff

# This is just a shell/template, need to revisit and actually test

with app.app_context():
    staff_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for staff_years in csvFile:
                staff = SupportStaff(
                    COMBOKEY=staff_years[0],
                    SCH_NAME=staff_years[1],
                    LEA_NAME=staff_years[2],
                    LEAID=staff_years[3],
                    JJ=staff_years[4],
                    school_year=staff_years[5],
                    SCH_FTETEACH_TOT=staff_years[6],
                    SCH_FTETEACH_CERT=staff_years[7],
                    SCH_FTETEACH_NOTCERT=staff_years[8],
                    SCH_FTECOUNSELORS=staff_years[9],
                    SCH_FTESECURITY_LEO=staff_years[10],
                    SCH_FTESECURITY_GUA=staff_years[11],
                    SCH_FTESERVICES_NUR=staff_years[12],
                    SCH_FTESERVICES_PSY=staff_years[13],
                    SCH_FTESERVICES_SOC=staff_years[14],
                )
                staff_list.append(staff)
    csv_to_db("/filepath")
    db.session.add_all(staff_list[1:])