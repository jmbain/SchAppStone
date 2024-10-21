// Imports (e.g. SchoolCard, SchoolList...)
import NavigationMenu from "./NavigationMenu";
import { Sheet, Card, Typography } from "@mui/joy";
import StudentCard1 from "./StudentCard1";
import StudentCard2 from "./StudentCard2";

function StudentsPage() {


    
    return (
        <div>
            <br className="navbreak"></br>
            <br className="navbreak"></br>
            <NavigationMenu />
            <br className="navbreak"></br>
            <Sheet
                variant="soft"
                color="neutral"
                sx={{
                    p: 3,
                    width: 500,
                    boxShadow: 'md',
                    borderRadius: 'sm',
                }}
            >
                <Typography level="h1">My Students</Typography>
                <br></br>
                <StudentCard1/>
                <StudentCard2/>
                <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', margin:2 }} >
                    <h4>Add Student</h4>
                </Card>
            </Sheet>
            
        </div>

    )
}

export default StudentsPage;