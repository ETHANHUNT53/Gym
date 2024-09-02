import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Navbar from './Navbar';
import axios from 'axios';


function MyAccount() {
    const [target, setTarget] = useState('');
    const [activity, setActivity] = useState('');

    const handleTarget = (event) => {
        setTarget(event.target.value);
    };

    const handleActivity = (event) => {
        setActivity(event.target.value);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        console.log(formValues);
        try {
            const response = await axios.post('https://y2dn949cai.execute-api.eu-west-3.amazonaws.com/api/update', formValues);
            console.log('Success:', response.data);
            alert("Updated successfully");
        }
        catch(error){
            console.log('Error:', error);
            alert("Updation Fail")
            
        }
    };

    return (
        <div>
            <Navbar/>

            <AppBar position='fixed' sx={{backgroundColor:"#9EF300", marginTop:'80px'}}>
                <Toolbar >
                    <Typography>
                        My Account
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container spacing={6} padding={3} mt={15} sx={{ position: {lg: 'fixed'}}}>
                <Grid item xs={12} md={3} lg={3}>
                    <Paper elevation={0} style={{ padding: '16px'}}>
                    <Box display="flex" alignItems="center" mb={5}>
                            <Box
                                sx={{
                                    borderLeft: '5px solid #9EF300',
                                    height: '50px', 
                                    marginRight: 2, 
                                }}
                            />
                            <Typography variant="h6">
                                General Information
                            </Typography>
                        </Box>
                        <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', border: '1px solid black', '&:hover': {backgroundColor:'white'} }}>
                            Log Out
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={9} lg={7} sx={{ marginLeft: { lg: '100px' } }}>
                    <Paper elevation={0} style={{ padding: '16px' }}>
                        <Box display="flex" alignItems="center" marginBottom={2}>
                            <AccountCircleOutlinedIcon sx={{ fontSize: 65 }} />
                            <Box marginLeft={2}>
                                <Typography variant="h6">Johnson Doe</Typography>
                                <Typography variant="body2">johnsondoe@nomail.com</Typography>
                            </Box>
                        </Box>

                        <form onSubmit={handleForm}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant='outlined'
                                margin='normal'
                                name="name"
                            />
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Your Target</InputLabel>
                                <Select
                                    value={target}
                                    onChange={handleTarget}
                                    label="Your Target"
                                    name="target"
                                    defaultValue="lose_weight"
                                >
                                    <MenuItem value="lose_weight">Lose Weight</MenuItem>
                                    <MenuItem value="muscle_gain">Muscle Gain</MenuItem>
                                    <MenuItem value="flexibility">Flexibility</MenuItem>
                                    <MenuItem value="endurance">Endurance</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Preferable Activity</InputLabel>
                                <Select
                                    value={activity}
                                    onChange={handleActivity}
                                    label="Preferable Activity"
                                    name="preferableActivity"
                                    defaultValue="yoga"
                                >
                                    <MenuItem value="yoga">Yoga</MenuItem>
                                    <MenuItem value="cardio">Cardio</MenuItem>
                                    <MenuItem value="strength_training">Strength Training</MenuItem>
                                    <MenuItem value="cycling">Cycling</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                variant='contained'
                                type='submit'
                                style={{ marginTop: '16px', backgroundColor: '#9EF300', color: 'black' }}
                            >
                                Save Changes
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default MyAccount;
