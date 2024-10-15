import csv;
from models import db, app, Offenses

# This is just a shell/template, need to revisit and actually test

with app.app_context():
    offenses_list = []
    def csv_to_db(csv_file):
        with open(csv_file, mode='r') as file:
            csvFile = csv.reader(file)
            for offense_years in csvFile:
                offense = Offenses(
                    COMBOKEY=offense_years[0],
                    SCH_NAME=offense_years[1],
                    LEA_NAME=offense_years[2],
                    JJ=offense_years[3],
                    school_year=offense_years[4],
                    SCH_FIREARM_IND=offense_years[5],
                    SCH_HOMICIDE_IND=offense_years[6],
                    SCH_OFFENSE_RAPE=offense_years[7],
                    SCH_OFFENSE_BATT=offense_years[8],
                    SCH_OFFENSE_ROBWW=offense_years[9],
                    SCH_OFFENSE_ROBWOW=offense_years[10],
                    SCH_OFFENSE_ATTWW=offense_years[11],
                    SCH_OFFENSE_ATTWOW=offense_years[12],
                    SCH_OFFENSE_THRWW=offense_years[13],
                    SCH_OFFENSE_THRWOW=offense_years[14],
                    SCH_OFFENSE_POSSWX=offense_years[14],
                )
                offenses_list.append(offense)
    csv_to_db("/filepath")
    db.session.add_all(offenses_list[1:])