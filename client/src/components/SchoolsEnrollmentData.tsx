import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsEnrollmentData({school}) {
    
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

    let cardColor;

    if(enrollment22_23.TOTAL > enrollment19_20.TOTAL) {
        cardColor = "success"
    }
    else if(enrollment22_23.TOTAL < enrollment19_20.TOTAL) {
        cardColor = "danger"
    }
    else if(enrollment22_23.TOTAL == enrollment19_20.TOTAL) {
        cardColor = "neutral"
    }

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10, padding:2}}>
            <Typography level="h2">Enrollment </Typography>
            <Card className="schoolDataContainer" color={cardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">2022-23 Enrollment: {enrollment22_23.TOTAL} students </Typography>
            </Card>
            <Card className="schoolDataContainer" color={cardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">2022-23 Enrollment: {enrollment22_23.TOTAL} students </Typography>
            </Card>
            <Card className="schoolDataContainer" color={cardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">2021-22 Enrollment: {enrollment21_22.TOTAL} students </Typography>
            </Card>
            <Card className="schoolDataContainer" color={cardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">2020-21 Enrollment: {enrollment20_21.TOTAL} students </Typography>
            </Card>
            <Card className="schoolDataContainer" color={cardColor} variant="solid" sx={{margin:2}}>
                <Typography level="h4">2019-20 Enrollment: {enrollment19_20.TOTAL} students </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsEnrollmentData;