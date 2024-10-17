import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsBasicData({school}) {

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card className="schoolDataContainer">
                <Typography level="h2">School Name: {school.SCH_NAME} </Typography>
                <Typography level="h4">School Address: 
                    <br></br>
                    {school.LSTREET1}
                    <br></br>
                    {school.LCITY}
                    <br></br>
                    {school.LSTATE} 
                    <br></br>
                    {school.LZIP} 
                    </Typography>
                <Typography level="h4">School District: {school.LEA_NAME} </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsBasicData;

            