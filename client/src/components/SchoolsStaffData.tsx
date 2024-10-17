import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsStaffData({school}) {

    let enrollment22_23;
    let enrollment21_22;
    let enrollment20_21;
    let enrollment19_20;

    school.annual_enrollment.forEach((year) => {
        if (year.SURVYEAR == "2022-2023") {
            enrollment22_23 = year
        }
        else if (year.SURVYEAR == "2021-2022") {
            enrollment21_22 = year
        }
        else if (year.SURVYEAR == "2020-2021") {
            enrollment20_21 = year
        }
        else if (year.SURVYEAR == "2019-2020") {
            enrollment19_20 = year
        }
    })

    let staffing20_21;
    let staffing17_18;
    
    school.support_staff.forEach((year) => {
        if (year.school_year == "17-18") {
            staffing17_18 = year
        }
        else if (year.school_year == "20-21") {
            staffing20_21 = year
        }
    })

    let cardColor;

    if(enrollment22_23.STUTERATIO > enrollment19_20.STUTERATIO) {
        cardColor = "success"
    }
    else if(enrollment22_23.STUTERATIO < enrollment19_20.STUTERATIO) {
        cardColor = "danger"
    }
    else if(enrollment22_23.STUTERATIO == enrollment19_20.STUTERATIO) {
        cardColor = "neutral"
    }

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card className="schoolDataContainer" color={cardColor} variant="solid">
                <Typography level="h2">Student to Staff Ratio: {enrollment22_23.STUTERATIO} </Typography>
                <Typography level="h4">Teachers: {staffing20_21.SCH_FTETEACH_TOT} </Typography>
                <Typography level="h4">Security: </Typography>
                <Typography level="h4">Services: Counselors, Nurses, Psychologists, Social Workers  </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsStaffData;