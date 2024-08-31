import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Pcard = () => {
    const date = new Date();
    const currDate = date.getDate();
    
    return (
        <Grid width={"42rem"}  padding={2} boxShadow={4} borderRadius={4} marginRight={4} marginBottom={4}>
            <Box display={"flex"} justifyContent={"space-between"} height={"fit-content"}>
                <Typography variant="body1" color="black" fontFamily={"Montserrat"} fontWeight={"600"}>
                    Yoga
                </Typography>
                <Button variant='contained' sx={{textTransform:"none", borderRadius:"50px", fontFamily:"Montserrat", }}>Scheduled</Button>
            </Box>
            <Typography fontFamily={"Montserrat"} fontWeight={"500"} letterSpacing={"0px"} paddingTop={3}>
                Enhance your flexibility and balance with this calming yoga session. Flow through a series of poses designed to stretch and strengthen your entire body while promoting relaxation.
            </Typography>
            <Box display={"flex"} alignItems={"center"} marginTop={2}>
                <FontAwesomeIcon icon={faCalendarCheck} style={{ fontSize: "1rem", marginRight: "0.5rem" }} />
                <Typography fontFamily={"Montserrat"} fontWeight={"600"} variant="body1" color="black">{currDate} July, 12:30</Typography>
            </Box>
            <br />
            <Box display={"flex"} justifyContent={"flex-end"}>
                <Button 
                    variant='contained' 
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "10px",
                        boxShadow: "0",
                        border: "2px solid black",
                        textTransform: 'none',
                        fontFamily: "Montserrat",
                        fontWeight: "600",
                        marginX: "10px",
                        "&:hover": {
                            backgroundColor: "#9EF300",
                            color: "black",
                            border: "none",
                            boxShadow: "none"
                        }
                    }}
                >
                    Cancel Workout
                </Button>
                <Button 
                    variant='contained' 
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "10px",
                        boxShadow: "0",
                        border: "2px solid black",
                        textTransform: 'none',
                        fontFamily: "Montserrat",
                        fontWeight: "600",
                        "&:hover": {
                            backgroundColor: "#9EF300",
                            color: "black",
                            border: "none",
                            boxShadow: "none"
                        }
                    }}
                >
                    Finish Workout
                </Button>
            </Box>
        </Grid>
    );
}

export default Pcard;
