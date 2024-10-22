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
    let ratioCardValue;

    if(enrollment22_23.STUTERATIO < 0) {
        ratioCardColor = "neutral"
        ratioCardValue = "School did not report"
    }
    else if(enrollment22_23.STUTERATIO > enrollment19_20.STUTERATIO) {
        ratioCardColor = "success"
        ratioCardValue = enrollment22_23.STUTERATIO
    }
    else if(enrollment22_23.STUTERATIO < enrollment19_20.STUTERATIO) {
        ratioCardColor = "danger"
        ratioCardValue = enrollment22_23.STUTERATIO
    }
    else if(enrollment22_23.STUTERATIO == enrollment19_20.STUTERATIO) {
        ratioCardColor = "neutral"
        ratioCardValue = enrollment22_23.STUTERATIO
    }

    let otherCardColor = "warning"
    // console.log(school.support_staff.length)

    if (school.support_staff.length > 0) {
        return (
            <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10, padding:2}}>
                <Typography level="h2">School Staffing</Typography>
                <Card className="schoolDataContainer" color={ratioCardColor} variant="solid" sx={{margin:2}}>
                    <Typography level="h4">Student to Staff Ratio: {ratioCardValue} </Typography>
                </Card>
                <Card className="schoolDataContainer" color={otherCardColor} variant="soft" sx={{margin:2}}>
                    <Typography level="h4">Teachers: {staffing20_21.SCH_FTETEACH_TOT} </Typography>
                </Card>
                <Card className="schoolDataContainer" color={otherCardColor} variant="soft" sx={{margin:2}}>
                    <Typography level="h4">Security: {staffing20_21.SCH_FTESECURITY_LEO + staffing20_21.SCH_FTESECURITY_GUA} </Typography>
                </Card>
                <Card className="schoolDataContainer" color={otherCardColor} variant="soft" sx={{margin:2}}>
                    <Typography level="h4">Services: {staffing20_21.SCH_FTECOUNSELORS + staffing20_21.SCH_FTESERVICES_NUR + staffing20_21.SCH_FTESERVICES_PSY + staffing20_21.SCH_FTESERVICES_SOC}  </Typography>
                </Card>
            </Sheet>
        )
    }
    else {
        return (
            <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10, padding:2}}>
                <Typography level="h2">School Staffing</Typography>
                <Card variant="solid" color="neutral" className="schoolDataContainer" sx={{margin:2}}>
                    <Typography level="h4">Sorry! Data unavailable</Typography>
                </Card>
            </Sheet>
        )}
}

export default SchoolsStaffData;