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

    let ratioCardColor;

    if(enrollment22_23.STUTERATIO > enrollment19_20.STUTERATIO) {
        ratioCardColor = "success"
    }
    else if(enrollment22_23.STUTERATIO < enrollment19_20.STUTERATIO) {
        ratioCardColor = "danger"
    }
    else if(enrollment22_23.STUTERATIO == enrollment19_20.STUTERATIO) {
        ratioCardColor = "neutral"
    }

    let otherCardColor = "warning"

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10, padding:2}}>
            <Typography level="h2">School Staffing</Typography>
            <Card className="schoolDataContainer" color={ratioCardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">Student to Staff Ratio: {enrollment22_23.STUTERATIO} </Typography>
            </Card>
            <Card className="schoolDataContainer" color={otherCardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">Teachers: {staffing20_21.SCH_FTETEACH_TOT} </Typography>
            </Card>
            <Card className="schoolDataContainer" color={otherCardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">Security: </Typography>
            </Card>
            <Card className="schoolDataContainer" color={otherCardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">Services: Counselors, Nurses, Psychologists, Social Workers  </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsStaffData;