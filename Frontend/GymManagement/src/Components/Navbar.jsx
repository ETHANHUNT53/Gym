import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <AppBar position='static' color='default'>
        <Toolbar>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                EnergyX
            </Typography>
            <Button color="inherit" >Workouts</Button>
            <Button color="inherit">Coaches</Button>
            <IconButton edge="end" color="inherit">
            <AccountCircle />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
