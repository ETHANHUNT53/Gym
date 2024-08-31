import { Typography, Grid, Button, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Pcard from './Pcard';

const Profile = () => {
    const navigate = useNavigate();
    const userEmail = localStorage.getItem("userEmail");

    const handleLogout = () => {
        localStorage.removeItem("userEmail");
        toast.success("Logged out successfully", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce
        });
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <Box
            sx={{
                margin: 0,
                padding: 0,
                minHeight: '100vh',
                // width: '100%',
                overflowX: 'hidden', // Prevent horizontal scrolling
                // boxSizing: 'border-box', // Ensure padding and border are included in the element's total width and height
            }}
        >
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <Navbar />
            <Grid
                container
                marginTop={11}
                sx={{
                    width: "100%",
                    maxHeight: "6rem",
                    backgroundColor: "#8ec42b",
                    display: 'flex',
                    alignItems: 'center',
                    padding: 0,

                    // boxSizing: 'border-box',
                }}
            >
                <Typography
                    variant="h5"
                    color="white"
                    fontFamily="Montserrat"
                    fontWeight={600}
                    sx={{
                        padding: 4,
                        margin: 0,
                        marginLeft: 2,
                    }}
                >
                    Hello, {userEmail}!
                </Typography>
            </Grid>

            <Grid 
                container
                spacing={2}
                marginTop={5}
                marginLeft={5}
                display={"flex"}
                
                sx={{
                    padding: '0 1rem',
                    maxWidth: '100%', // Ensure the Grid container does not exceed the viewport width
                    boxSizing: 'border-box',
                    // border: "2px solid black",
                    // overflowX:"hidden"
                }}
            >
                <Pcard />
                <Pcard />
                <Pcard />
                <Pcard />
                <Pcard />
                <Pcard />
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        marginTop: "25px",
                        marginBottom: "20px",
                        backgroundColor: "#9EF300",
                        fontWeight: "bold",
                        color: "#000000",
                        cursor: "pointer",
                        "&:hover": {
                            background: "#5f8c09",
                        },
                        alignSelf: 'center', // Center the button horizontally
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );
};

export default Profile;
