import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsEnrollmentData() {

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card className="schoolDataContainer">
                <Typography level="h2">2023-24 Enrollment: 1,000 students </Typography>
                <Typography level="h4">2022-23 Enrollment: 1,000 students </Typography>
                <Typography level="h4">2021-22 Enrollment: 1,000 students </Typography>
                <Typography level="h4">2020-21 Enrollment: 1,000 students </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsEnrollmentData;