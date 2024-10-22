// Imports (e.g. SchoolCard, SchoolList...)
import NavigationMenu from "./NavigationMenu";
import { Sheet, Typography, Card } from "@mui/joy";

function HomePage() {
    return (
        <div>
            <Sheet
                variant="outlined"
                color="primary"
                sx={{
                    p: 3,
                    width: 1000,
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
                    <Typography level="body-md" >Target users are parents of children in NYC where there is a publics school application and lottery process. Parents upload information about their student(s), submit applications to schools and manage their applications across multiple schools. Clicking on schools allows a parent to see more information about the school.</Typography>
                </Card>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                            minWidth: 250,
                    }}>
                    <Typography level="h3">A School Explorer</Typography>
                    <Typography level="body-md" >In addition to submitting applications, users can do more in depth research about schools in the School Explorer. There are options to search for specific schools and filter by various criteria, such as if the school is fully virtual or if it is a charter school. Beyond search and filter, there are also curated statistics about schools such as which schools are the biggest or smallest in the area and which have grown or shrunk the most since the pandemic.</Typography>
                </Card>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                            minWidth: 250,
                        }}>
                    <Typography level="h3">TBD</Typography>
                    <Typography level="body-md" >TBD</Typography>
                </Card>
            </Sheet>
        </div>

    )
}

export default HomePage;