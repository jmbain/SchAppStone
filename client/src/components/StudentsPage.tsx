// Imports (e.g. SchoolCard, SchoolList...)
import NavigationMenu from "./NavigationMenu";
import { Sheet } from "@mui/joy";

function StudentsPage() {
    return (
        <div>
            <br className="navbreak"></br>
            <NavigationMenu />
            <Sheet
                variant="outlined"
                color="primary"
                sx={{p: 3}}
            >
                <h2 className="header">Students Page</h2>
                <h4>Other stuff</h4>
            </Sheet>
        </div>

    )
}

export default StudentsPage;