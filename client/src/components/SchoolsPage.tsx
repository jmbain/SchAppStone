// Imports (e.g. SchoolCard, SchoolList...)
import NavigationMenu from "./NavigationMenu";
import { Sheet, Typography, Card } from "@mui/joy";
import { useState, useEffect } from "react";

//Data table and pagination imports
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

//Instead of grapping full all data of all schools


function SchoolsPage() {
    
    const [schools, setSchools] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/api/schools", {
          mode: 'no-cors'})
        .then(r => r.json())
        .then(schoolData => setSchools(schoolData))
      },[])

    const columns: GridColDef[] = [
        { field: 'SCH_NAME', headerName: 'School Name', width: 400 },
        { field: 'SCHOOL_LEVEL', headerName: 'Level', width: 100 },
        { field: 'SCHOOL_TYPE_TEXT', headerName: 'Type', width: 150 },
        { field: 'LCITY', headerName: 'City', width: 200 }
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
      ];
    
    const rows = schools
    const paginationModel = { page: 0, pageSize: 10 };
    
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
                    width: 'auto',
                    boxShadow: 'md',
                    borderRadius: 'sm',
                }}
            >
                <Typography level="h1">School Explorer</Typography>
                <Paper sx={{ height: 'auto', width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10, 25]}
                        // checkboxSelection
                        sx={{ border: 0 }}
                        onRowClick={(params) =>
                            navigate(`/schools/${params.row.id}`)
                        }
                    />
                    </Paper>
            </Sheet>
        </div>

    )
}

export default SchoolsPage;