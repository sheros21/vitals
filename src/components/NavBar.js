import { React, useState } from 'react';
// nav
import { Link } from 'react-router-dom';

// MUI 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const primTheme = createTheme({
  palette: {
    primary: {
      main: '#312C51'
    },
    secondary: {
      main: "#FOC38E"
    }
  },
});


function NavBar(){
    return(
        <div>
          <ThemeProvider theme={primTheme}> 
              <AppBar color="primary"> 
                <Toolbar>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Arial;',
                      fontWeight: 700,
                      mr: 2,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      }}>
                      <img src={InvertLogoImg} width={100} height={66} alt="passedImg"/>
                    </Typography>
                    <Stack direction = 'row' spacing = {2}>
                        <Button component = {Link} to = "../track" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'Arial', fontWeight: 700, display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Discover</Button> 
                        <Button component = {Link} to = "../analytics" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'Arial',fontWeight: 700,  display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Saved</Button> 
                        <Button component = {Link} to = "../track" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'Arial',fontWeight: 700,  display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Create</Button>   
                    </Stack> 
                </Toolbar>
            </AppBar>
          </ThemeProvider>
        </div>
    );
}
export default NavBar;