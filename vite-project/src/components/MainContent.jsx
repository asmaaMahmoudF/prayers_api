import React from 'react'
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Paryer from './Paryer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useForkRef} from '@mui/material';

export default  function MainContent() {
  // useEffect(() => { 
  //   console.log("hello world");
  // }, []);
  // const [timings, setTimings] = useState({
  //   "Fajr": "05:24",
  //   "Dhuhr": "12:13",
  //   "Asr": "15:19",
  //   "Maghrib": "17:41",
  //   "Isha": "19:11",
  //  const data  = await axios.get('https://api.aladhan.com/v1/timingsByCity/22-01-2025?country=SA&city=')
  // });
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
	<>
  
	{/* Grid container */}
	  <Grid 
          container
          style={{
            height: "30vh", // Full viewport height
          }}
          spacing={30} // Spacing between Grid items
    >
     {/* First Grid Item */}
	 <Grid item xs={4} style={{marginLeft: "40px", margin:"30px 30px " }}>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
          <h2 style={{ fontWeight: "200" }}>8 January 2025 | 1:49</h2>
          <h1 style={{ fontWeight: "200" }}>Cairo</h1>
		  {/* <Divider style={{ borderColor: "white",opacity:0.1 }} /> */}
        </div>
      </Grid>
      {/* Second Grid Item */}
      <Grid item xs={4} style={{ margin:"30px 30px"}}>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
          <h2 style={{ fontWeight: "200" }}>Remaining until Fajer prayer.</h2>
          <h1 style={{ fontWeight: "200" }}>2:12:35</h1>
		  {/* <Divider style={{ borderColor: "white", opacity:0.1 }} /> */}
        </div>
      </Grid>
    </Grid>
      <Divider style={{ borderColor: "white",opacity:0.1, margin:" 0px 20px 0px 20px" }} />

	{/* End of Grid container */}
	{/* Stack Prayer */}
	  <Stack direction ="row" justifyContent={"space-around"} marginTop="30px">
      <Paryer 
        name="{timings.Fajr} "
        time="05:12" 
        image="https://cdn-cm.freepik.com/resources/5c64457a-0002-4567-8594-79b428dc3890.jpg?token=exp=1737501107~hmac=aa4b7b62509136cbb6ec211dae71e588ae1b7861f05c88cd912ace78cc457880"/>
      <Paryer 
        name='{timings.Dhuhr} '
        time="12:11" 
        image="https://cdn-cm.freepik.com/resources/477b4b7f-0c8b-46ed-9e6a-a2f84f84b38e.jpg?token=exp=1737501180~hmac=ed901a856cd66026011437c201b41f7a31091659fd53047b94121fe3ca703f5d"/>
      <Paryer 
        name='{timings.Asr} ' 
        time="03:10" 
        image="https://cdn-cm.freepik.com/resources/c2f8ab7d-5510-4b6f-8b9a-6417fc82f15c.jpg?token=exp=1737501153~hmac=435ee7b17c4998cc07e8fe88197c6cee573a22edf071c09a46dc2374d1788f66"/>
      <Paryer 
        name ='{timings.Maghrib}  '
        time="05:30" 
        image="https://cdn-cm.freepik.com/resources/45029b30-8ea2-43ac-bcfc-8e576bf2053f.jpg?token=exp=1737501224~hmac=88db3f6d0aa9012c31189ea6bcf1359a0dc3f1d25b8c130a1d26bb5c34c76bbb"/>
      <Paryer 
        name='{timings.Isha} '
        time="07:00" 
        image="https://cdn-cm.freepik.com/resources/a8c21b31-706e-4107-aec8-65621b21b89f.jpg?token=exp=1737501348~hmac=8867289d151d33ffcaee96910efd8a0c74707c8d0d44b002373983437e15733a"/>

    </Stack>
        {/* End of Stack Prayer */}
      {/* Select City */}
      <stack
      direction
      style={{
        display: "flex", // Use flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "10vh", // Full viewport height
        }}
    >
      <FormControl style={{width:"20%"}}>
        <InputLabel id="demo-simple-select-label"  style={{color: "white"}}>City</InputLabel>
        <Select style={{color: "white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Age"
          onChange={handleChange}
        >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </stack>
	</>
  )
}
