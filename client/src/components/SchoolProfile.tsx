//________STARTING WITH APPLICATION PROFILE AS TEMPLATE, NEED TO UPDATE______________

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { styled } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
import NavigationMenu from './NavigationMenu';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';


import SchoolsBasicData from './SchoolsBasicData';
import SchoolsEnrollmentData from './SchoolsEnrollmentData';
import SchoolsStaffData from "./SchoolsStaffData";
import SchoolOffensesData from './SchoolsOffensesData';



// const Item = styled(Sheet)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography['body-sm'],
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     borderRadius: 4,
//     color: theme.vars.palette.text.secondary,
//     ...theme.applyStyles('dark', {
//       backgroundColor: theme.palette.background.level1,
//     }),
//   }));

function SchoolProfile() {
    const [school, setSchool] = useState(null)
    const {id} = useParams()

    // console.log(school)

    interface school {
        //set the school type
    }

    useEffect(() => {
        fetch(`/api/schools/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((schoolData) => setSchool(schoolData))
            }
        })
    },[])

    if(school!==null) {
        return(
            <div>
                <br></br>
                <br></br>
                <NavigationMenu/>
                <br></br>
                <br></br>
                <Box sx={{ width: 1 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(16, 1fr)', gridTemplateRows: 'auto', gap: 2, minWidth: 800 }}>
                        <Box sx={{ gridColumn: 'span 15'}} >
                            <SchoolsBasicData school={school}/>
                        </Box>
                        <Box sx={{ gridColumn: 'span 5' }}>
                            <SchoolsEnrollmentData school={school}/>
                        </Box>
                        <Box sx={{ gridColumn: 'span 5' }}>
                            <SchoolsStaffData school={school}/>
                        </Box>
                        <Box sx={{ gridColumn: 'span 5' }}>
                            <SchoolOffensesData school={school}/>
                        </Box>
                        <Box sx={{ gridColumn: 'span 15'}} >
                            <Button sx={{margin:5}}>Save For Later</Button>
                            <Button variant="solid" sx={{margin:5}}>Apply Now </Button>
                        </Box>
                    </Box>
                </Box>
            </div>
            
        )

    }
}

export default SchoolProfile;