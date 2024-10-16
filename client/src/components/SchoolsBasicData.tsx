import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsBasicData() {

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card className="schoolDataContainer">
                <Typography level="h2">School Name: </Typography>
                <Typography level="h4">School Address: </Typography>
                <Typography level="h4">School District: </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsBasicData;

            