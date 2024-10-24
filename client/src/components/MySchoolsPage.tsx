// Imports (e.g. SchoolCard, SchoolList...)
import { Sheet, Typography, Card } from "@mui/joy";
// import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import SchoolCard1 from "./SchoolCard1";
import SchoolCard2 from "./SchoolCard2";

function MySchoolsPage() {

    const {savedSchools} = useOutletContext()

    // console.log(savedSchools)

    return (
        <div>
            <Sheet
                variant="outlined"
                color="primary"
                sx={{
                    p: 3,
                    width: 750,
                    boxShadow: 'md',
                    borderRadius: 'sm',
                }}
            >
                <Typography level="h1">My Saved Schools</Typography>
                <SchoolCard1/>
                <SchoolCard2/>
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