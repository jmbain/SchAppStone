// Default vite imports
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//________________________________________________end default vite imports

//JB Imports...
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Joy UI imports
import '@fontsource/inter'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
// import Typography from '@mui/joy/Typography';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import React from 'react'; // also added this in step 9 below
import NavigationMenu from './components/NavigationMenu';


//Imports for MUI and Joy UI that allow for mixing the styles of both
import {
  useColorScheme as useMaterialColorScheme,
  ThemeProvider as MaterialCssVarsProvider,
  extendTheme as extendMaterialTheme,
  THEME_ID
} from "@mui/material/styles";
import {
  CssVarsProvider as JoyCssVarsProvider,
  useColorScheme as useJoyColorScheme
} from "@mui/joy/styles";

const materialTheme = extendMaterialTheme();


//Joy UI tutorial instructions for posterity - note, refer to SignInSheet component where some of this has been relocated to...
// 1. Add Joy UI with... npm install @mui/joy @emotion/react @emotion/styled
// 2. Ensure react and react-dom peer dependencies are installed
// 3. Add Inter font with... npm install @fontsource/inter
// 4. Replace empty tags with CssVarsProvider
// 5. Add Sheet component as div cointainer that uspports Joy UI features
// 6. Add Typography component which replaces html header, paragraph and span tags
// 7. Add text fields for user inputs by importing FormControl, FormLabel and Input components
// 8. Add Button and Link components for user actions
// 9. Add Light/Dark Mode toggles by importing useColorScheme, Select and Option components as well as ModeToggle function below 

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Select
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' }}
      className='display-toggle'
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}



function App() {
  // const [count, setCount] = useState(0)
  
  // useEffect(() => {
  //   setSavedSchools([1,2,3])
  // },[])

  const [savedSchools, setSavedSchools] = useState([])

  return (
    <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <div className="appContainer">
          <Header/>
          <ModeToggle />
          <br></br>
          <br></br>
          <NavigationMenu />
          <br></br>
          <Outlet context={{
              savedSchools: savedSchools,
              setSavedSchools: setSavedSchools,
          }}/>
        </div>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  )
}

export default App;
