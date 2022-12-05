import { React, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

// MUI imports
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// for timer, i haven't read through the documentation for these
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

// for calednar
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function TrackPg(){
    const NAME = 'Abhi'
    // const dayjs = require('dayjs')
    // //import dayjs from 'dayjs' // ES 2015
    // dayjs().format()



    // const dayjs = require('dayjs')
    // //import dayjs from 'dayjs' // ES 2015
    // dayjs().format()
    const [value, setValue] = useState(
        dayjs('2023-01-01T00:00:00.000')
    );
    
    const [textValue, setTextValue] = useState("");

    const handleTextFieldChange = (e) => {
        console.log("pass");
        console.log(`Typed => ${e.target.value}`)
        setTextValue(e.target.value)
    };

    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        <div>
        <Button  size="large" style={{
            borderRadius: 25,
            backgroundColor: "#000",
            fontSize: "18",
            fontWeight: "bold"
            }} 
            component = {Link} to = "../"  
            color = 'primary'  
            variant="contained">
            Home
        </Button>
        
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ p: 5 }}
            >
                <h4> Welcome {NAME} </h4> 
                {/* TODO have a label */}
                <TextField id="outlined-basic" label="Blood Sugar Level" variant="outlined" value = {textValue} onChange = {handleTextFieldChange} />
                
                {/* These should only appear when the text above has something entered in */}
                {/* time input */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          
          renderInput={(params) => <TextField {...params} />}
        />
                <DesktopTimePicker
          label="For desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          disableOpenPicker={true}
          renderInput={(params) => <TextField {...params} />}
        />
                </LocalizationProvider>
    {/* dropdown */}
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        >
        <MenuItem value={1}>Before Breakfest (Fasting)</MenuItem>
        <MenuItem value={2}>After Breakfest</MenuItem>
        <MenuItem value={3}>Before Lunch</MenuItem>
        <MenuItem value={4}>After Lunch</MenuItem>
        <MenuItem value={5}>Before Dinner</MenuItem>
        <MenuItem value={6}>After Dinner</MenuItem>
        </Select>
    </FormControl>
    </Box>

            </Stack>
  
        </div>

    );
}
