import { useState } from 'react';
import './App.css';
import Registration from './Components/Registration';
import { Container, Grid } from '@mui/material';
import Navbar from './Components/Navbar';
import Greeting from './Components/Greeting';
import WorkoutCard from './Components/WorkoutCard';
import UserProfile from './Components/UserProfile';
import Sample from './Components/Sample';
function App() {

  return (
    <>
      {/* <Registration/> */}
      <Navbar/> 
      {/* <div>
      <Navbar />
      <Container>
        <Greeting />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <WorkoutCard title="Yoga" description="Enhance your flexibility..." date="July 9, 12:30" status="Scheduled" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <WorkoutCard title="Fitness" description="Ultimate Fitness Fusion..." date="June 25, 12:30" status="Waiting for feedback" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <WorkoutCard title="Rock Climbing" description="Rock Climbing Challenge..." date="June 17, 12:30" status="Finished" />
          </Grid>
        </Grid>
      </Container>
    </div>
    {/* <Sample/> */}
    </>
  )
}

export default App
