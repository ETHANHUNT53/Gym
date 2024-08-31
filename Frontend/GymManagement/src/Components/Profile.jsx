import { Typography,Grid,Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {

    const navigate = useNavigate();
    const handleLogout = ()=>{
      console.log("logout")
        toast.success("Logged out successfully", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce
    })
        setTimeout(()=>{
            navigate('/login');
        },2000)
    }
  return (
    <Grid>
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
        <Typography variant='h3'style={{ fontWeight: "bold" }}>Profile</Typography>
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
                }}
                onClick={handleLogout}
                
              >
                Logout
              </Button>

    </Grid>
  )
}

export default Profile