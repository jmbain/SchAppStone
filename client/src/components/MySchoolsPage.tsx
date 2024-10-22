// Imports (e.g. SchoolCard, SchoolList...)
import NavigationMenu from "./NavigationMenu";
import { Sheet, Typography, Card } from "@mui/joy";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function MySchoolsPage() {

    const {savedSchools} = useOutletContext()

    console.log(savedSchools)

    return (
        <div>
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
                <Typography level="h1">My Saved Schools</Typography>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                        }}>
                    <h4>School 1</h4>
                </Card>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                    }}>
                    <h4>School 2</h4>
                </Card>
                <Card sx={{
                            m: 2,
                            boxShadow: 'md',
                        }}>
                    <h4>School 3</h4>
                </Card>
            </Sheet>
        </div>

    )
}

export default MySchoolsPage;