import { Sheet, Card, Typography, Button } from "@mui/joy"

function SchoolOffensesData({school}) {
    
    if (school.offenses.length > 0 ) {
        
        let offenses20_21;
        let offenses17_18;
    
        school.offenses.forEach((year) => {
            if (year.school_year == "17-18") {
                offenses17_18 = year
            }
            else if (year.school_year == "20-21") {
                offenses20_21 = year
            }
        })

        // console.log(school.offenses)

        let firearmColor;
        let homicideColor;
        let rapeColor;
        let batteryColor;
        let withWeaponsColor;
        let withoutWeaponsColor;

        if (offenses20_21.SCH_FIREARM_IND == "Yes") {
            firearmColor = "danger"
        }
        else if(offenses20_21.SCH_FIREARM_IND == "No") {
            firearmColor = "success"
        }

        if (offenses20_21.SCH_HOMICIDE_IND == "Yes") {
            homicideColor = "danger"
        }
        else if(offenses20_21.SCH_HOMICIDE_IND == "No") {
            homicideColor = "success"
        }

        if (offenses20_21.SCH_OFFENSE_RAPE > 0) {
            rapeColor = "danger"
        }
        else if(offenses20_21.SCH_OFFENSE_RAPE == 0) {
            rapeColor = "success"
        }

        if (offenses20_21.SCH_OFFENSE_BATT > 0) {
            batteryColor = "danger"
        }
        else if(offenses20_21.SCH_OFFENSE_BATT == 0) {
            batteryColor = "success"
        }

        if (offenses20_21.SCH_OFFENSE_ROBWW + offenses20_21.SCH_OFFENSE_ATTWW + offenses20_21.SCH_OFFENSE_THRWW > 0) {
            withWeaponsColor = "danger"
        }
        else if(offenses20_21.SCH_OFFENSE_ROBWW + offenses20_21.SCH_OFFENSE_ATTWW + offenses20_21.SCH_OFFENSE_THRWW == 0) {
            withWeaponsColor = "success"
        }

        if (offenses20_21.SCH_OFFENSE_ROBWOW + offenses20_21.SCH_OFFENSE_ATTWOW + offenses20_21.SCH_OFFENSE_THRWOW > 0) {
            withoutWeaponsColor = "danger"
        }
        else if(offenses20_21.SCH_OFFENSE_ROBWOW + offenses20_21.SCH_OFFENSE_ATTWOW + offenses20_21.SCH_OFFENSE_THRWOW == 0) {
            withoutWeaponsColor = "success"
        }
        
        return (
            <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10, padding:2}}>
                <Typography level="h2">School Safety</Typography>
                <Card variant="solid" color={firearmColor} className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Firearm Indicator: {offenses20_21.SCH_FIREARM_IND}</Typography>
                </Card>
                <Card variant="solid" color={homicideColor} className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Homicide Indicator: {offenses20_21.SCH_HOMICIDE_IND}</Typography>
                </Card>
                <Card variant="solid" color={rapeColor} className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Rape: {offenses20_21.SCH_OFFENSE_RAPE}</Typography>
                </Card>
                <Card variant="solid" color={batteryColor} className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Battery:  {offenses20_21.SCH_OFFENSE_BATT}</Typography>
                </Card>
                <Card variant="solid" color={withoutWeaponsColor} className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Offenses With Weapons:  {offenses20_21.SCH_OFFENSE_ROBWOW + offenses20_21.SCH_OFFENSE_ATTWOW + offenses20_21.SCH_OFFENSE_THRWOW}</Typography>
                </Card>
                <Card variant="solid" color={withWeaponsColor} className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Offenses Without Weapons:  {offenses20_21.SCH_OFFENSE_ROBWW + offenses20_21.SCH_OFFENSE_ATTWW + offenses20_21.SCH_OFFENSE_THRWW}</Typography>
                </Card>
            </Sheet>
        )
    }
    else {
        return (
            <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10, padding:2}}>
                <Typography level="h2">School Safety</Typography>
                <Card variant="solid" color="neutral" className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Sorry! Data unavailable</Typography>
                </Card>
            </Sheet>
        )
    }

}

export default SchoolOffensesData;