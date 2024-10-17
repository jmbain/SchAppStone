import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsStaffData({school}) {

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card className="schoolDataContainer">
                <Typography level="h2">Student to Staff Ratio: </Typography>
                <Typography level="h4">Teachers: </Typography>
                <Typography level="h4">Security: </Typography>
                <Typography level="h4">Services: Counselors, Nurses, Psychologists, Social Workers  </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsStaffData;