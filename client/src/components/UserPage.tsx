// Imports (e.g. SchoolCard, SchoolList...)
import NavigationMenu from "./NavigationMenu";
import { Sheet, Card, Typography } from "@mui/joy";
import UserCard from "./UserProfile";

function UserPage() {


    
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
                <Typography level="h1">My Profile</Typography>
                <br></br>
                <UserCard/>
            </Sheet>
            
        </div>

    )
}

export default UserPage;