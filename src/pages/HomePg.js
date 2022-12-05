import { React, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

// MUI imports
import TextField from '@mui/material/TextField';

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const primTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#312C51'
//     },
//     secondary: {
//       main: "#FOC38E"
//     }
//   },
// });

export default function HomePg(){
    const [textValue, setTextValue] = useState("");

    const handleTextFieldChange = (e) => {
        console.log("pass");
       console.log(`Typed => ${e.target.value}`)
       setTextValue(e.target.value)
    };

    return(
        <div>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ p: 5 }}
            >
                <h4> Vitals </h4> 
                <TextField id="outlined-basic" label="Username" variant="outlined" value = {textValue} onChange = {handleTextFieldChange} />
                <TextField id="outlined-basic" label="Password" variant="outlined" value = {textValue} onChange = {handleTextFieldChange} />
                
                <Button  size="large" style={{
                    borderRadius: 25,
                    backgroundColor: "#000",
                    fontSize: "18",
                    fontWeight: "bold"
                    }} 
                    component = {Link} to = "../track"  
                    color = 'primary'  
                    variant="contained">
                    Login
                </Button>

                <Button  size="large" style={{
                    borderRadius: 25,
                    backgroundColor: "#000",
                    fontSize: "18",
                    fontWeight: "bold"
                    }} 
                    component = {Link} to = "../create-account"  
                    color = 'primary'  
                    variant="contained">
                    Create Account
                </Button>
            </Stack>
        </div>

    );
}
