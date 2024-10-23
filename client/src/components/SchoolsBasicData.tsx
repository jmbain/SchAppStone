import { Sheet, Card, Typography } from "@mui/joy"

function SchoolsBasicData({school}) {

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card className="schoolDataContainer">
                <Typography level="h3">School Name: <Typography level="body-lg">{school.SCH_NAME}</Typography>  </Typography>
                <Typography level="h3">School Address: 
                    <br></br>
                    <Typography level="body-lg">{school.LSTREET1}</Typography> 
                    <br></br>
                    <Typography level="body-lg">{school.LCITY}</Typography> 
                    <br></br>
                    <Typography level="body-lg">{school.LSTATE}</Typography> 
                    <br></br>
                    <Typography level="body-lg">{school.LZIP}</Typography> 
                </Typography>
                <Typography level="h3">School District: <Typography level="body-lg">{school.LEA_NAME}</Typography>  </Typography>
            </Card>
        </Sheet>
    )

}

export default SchoolsBasicData;

            