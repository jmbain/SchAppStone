// Imports (e.g. SchoolCard, SchoolList...)
import { Sheet, Typography, Card } from "@mui/joy";

function HomePage() {
    return (
        <div>
            <Sheet
                variant="outlined"
                color="primary"
                sx={{
                    p: 3,
                    width: '95%',
                    boxShadow: 'md',
                    borderRadius: 'sm',
                    display: "flex",
                    flexDirection: 'column',
                    flexWrap: "wrap"
                }}
            >
                <Typography level="h1">Welcome to my Capstone! Here you will find...</Typography>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                            minWidth: 250,
                        }}>
                    <Typography level="h3">A School Application System</Typography>
                    <Typography level="body-md" >Target users are parents of children in NYC where there is a public school application and lottery process. This part of the system is currently more akin to a mockup with more functionality coming in the future.</Typography>
                </Card>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                            minWidth: 250,
                    }}>
                    <Typography level="h3">A School Explorer</Typography>
                    <Typography level="body-md" >Users can do more in depth research about schools in the School Explorer. There are options to search for specific schools and filter by various criteria, such as if the school is fully virtual or if it is a charter school.</Typography>
                </Card>
            </Sheet>
        </div>

    )
}

export default HomePage;