import { Sheet, Card, Typography, Button } from "@mui/joy"

function SchoolOffensesData({school}) {

    return (
        <Sheet className="schoolProfileContainer" sx={{gap:25, borderRadius:10}}>
            <Card variant="solid" color="primary" className="schoolDataContainer">
                <Typography level="h2">Firearm Indicator: </Typography>
                <Typography level="h4">Homicide Indicator: </Typography>
                <Typography level="h4">Rape: </Typography>
                <Typography level="h4">Battery:  </Typography>
                <Typography level="h4">Offenses With Weapons:  </Typography>
                <Typography level="h4">Offenses Without Weapons:  </Typography>
                <Button variant="soft">Test</Button>
            </Card>
        </Sheet>
    )

}

export default SchoolOffensesData;