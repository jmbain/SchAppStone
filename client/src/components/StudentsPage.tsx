// Imports (e.g. SchoolCard, SchoolList...)
import NavigationMenu from "./NavigationMenu";
import { Sheet, Card, Typography } from "@mui/joy";

function StudentsPage() {


    
    return (
        <div>
            <br className="navbreak"></br>
            <br className="navbreak"></br>
            <NavigationMenu />
            <br className="navbreak"></br>
            <Sheet
                variant="outlined"
                color="primary"
                sx={{
                    p: 3,
                    width: 500,
                    boxShadow: 'md',
                    borderRadius: 'sm',
                }}
            >
                <Typography level="h1">Students Page</Typography>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                        }}>
                    <h4>Card 1</h4>
                </Card>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                    }}>
                    <h4>Card 2</h4>
                </Card>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                        }}>
                    <h4>Card 3</h4>
                </Card>
            </Sheet>
        </div>

    )
}

export default StudentsPage;