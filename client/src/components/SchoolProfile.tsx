//________STARTING WITH APPLICATION PROFILE AS TEMPLATE, NEED TO UPDATE______________

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { styled } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';


import SchoolsBasicData from './SchoolsBasicData';
import SchoolsEnrollmentData from './SchoolsEnrollmentData';
import SchoolsStaffData from "./SchoolsStaffData";
import SchoolOffensesData from './SchoolsOffensesData';

import { useOutletContext } from "react-router-dom";

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

    // type savedSchools {
    //     //array type...
    // }

    useEffect(() => {
        fetch(`/api/schools/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((schoolData) => setSchool(schoolData))
            }
        })
    },[])

    const {savedSchools, setSavedSchools} = useOutletContext()

    function handleSaveClick() {
        console.log("Saved!")
        // if (savedSchools.length === 0)
        setSavedSchools([2,3,4])
    }

    function handleApplyClick() {
        console.log("Applied!")
    }
    console.log(savedSchools)

    // revisit, saved schools can be a table in the db...
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     fetch('/api/pets', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(formData)
    //     })
    //     .then(resp => {
    //       if (resp.ok) {
    //         return resp.json()
    //       } else {
    //         return Promise.reject(resp)
    //       }
    //     })
    //     .then(data => console.log(data))
    //     .catch(resp => resp.json())
    //     .then(errorData => setError(errorData))
    //   }

    if(school!==null) {
        return(
            <div>
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
                            <Button sx={{margin:5}} onClick={handleSaveClick}>Save School</Button>
                            <Button variant="solid" sx={{margin:5}} onClick={handleApplyClick}>Apply Now </Button>
                        </Box>
                    </Box>
                </Box>
            </div>
            
        )

    }
}

export default SchoolProfile;