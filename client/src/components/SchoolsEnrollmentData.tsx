import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsEnrollmentData({school}) {
    
    let enrollment22_23;
    let enrollment21_22;
    let enrollment20_21;
    let enrollment19_20;

    school.annual_enrollment.forEach((year) => {
        if (year.SURVYEAR == "2022-2023") {
            enrollment22_23 = year.TOTAL
        }
        else if (year.SURVYEAR == "2021-2022") {
            enrollment21_22 = year.TOTAL
        }
        else if (year.SURVYEAR == "2020-2021") {
            enrollment20_21 = year.TOTAL
        }
        else if (year.SURVYEAR == "2019-2020") {
            enrollment19_20 = year.TOTAL
        }
    })

    let cardColor;

    if(enrollment22_23 > enrollment19_20) {
        cardColor = "success"
    }
    else if(enrollment22_23 < enrollment19_20) {
        cardColor = "danger"
    }
    else if(enrollment22_23 > enrollment19_20) {
        cardColor = "neutral"
    }

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card className="schoolDataContainer" color={cardColor} variant="solid">
                <Typography level="h4">2022-23 Enrollment: {enrollment22_23} students </Typography>
                <Typography level="h4">2022-23 Enrollment: {enrollment22_23} students </Typography>
                <Typography level="h4">2021-22 Enrollment: {enrollment21_22}students </Typography>
                <Typography level="h4">2020-21 Enrollment: {enrollment20_21} students </Typography>
                <Typography level="h4">2019-2020 Enrollment: {enrollment19_20} students </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsEnrollmentData;