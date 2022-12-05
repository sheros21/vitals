import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function OnboardPg(){
    
    return(
        <div>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ p: 5 }}
            >
                <h4> Onboarding </h4> 
                <h8> Allow users to choose notifications, enter weight, etc </h8> 
                   
                <Button  size="large" style={{
                    borderRadius: 25,
                    backgroundColor: "#000",
                    fontSize: "18",
                    fontWeight: "bold"
                    }} 
                    component = {Link} to = "../track"  
                    color = 'primary'  
                    variant="contained">
                    Continue
                </Button>
            </Stack>
        </div>

    );
}
