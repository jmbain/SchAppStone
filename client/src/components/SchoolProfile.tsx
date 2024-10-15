//________STARTING WITH APPLICATION PROFILE AS TEMPLATE, NEED TO UPDATE______________

// import { useState, useEffect } from "react";
// import { useParams, useOutletContext } from "react-router-dom";

import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import SchoolsBasicData from './SchoolsBasicData';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.background.level1,
    }),
  }));

function SchoolProfile() {
    // const [school, setSchool] = useState(null)
    // const {id} = useParams()

    // console.log(school)

    // useEffect(() => {
    //     fetch(`/api/schools/${id}`)
    //     .then(r => {
    //         if(r.ok) {
    //             r.json().then((schoolData) => setSchool(schoolData))
    //         }
    //     })
    // },[])

    // if(school!==null) {
        return(
            <div>
                <Grid container
            spacing={{ xs: 5, md: 5 }}
            columns={{ xs: 5, sm: 10, md: 15 }}
            sx={{ flexGrow: 1 }}>
                <Grid xs={2} md={8} component={SchoolsBasicData}>
                    <Item>xs=6 md=8</Item>
                </Grid>
                <Grid xs={6} md={4} component={SchoolsBasicData}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid xs={6} md={4} component={SchoolsBasicData}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid xs={6} md={8} component={SchoolsBasicData}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
            </div>
            
        )

    // }
}

export default SchoolProfile;