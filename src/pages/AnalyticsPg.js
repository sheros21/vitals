import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function AnalyticsPg(){
    
    return(
        <div>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ p: 5 }}
            >
                <h4> Analytics </h4> 
                
                   
                <Button  size="large" style={{
                    borderRadius: 25,
                    backgroundColor: "#000",
                    fontSize: "18",
                    fontWeight: "bold"
                    }} 
                    component = {Link} to = "../"  
                    color = 'primary'  
                    variant="contained">
                    Continue
                </Button>
            </Stack>
        </div>

    );
}
