import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Switch, CssBaseline, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';  // Import visibility icons
import Image from '../assets/download.png';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password cannot be less than 8 characters" }),
});


// const navigate = useNavigate();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);  // State to manage password visibility
  
  const navigate = useNavigate();

  const validateField = (name, value) => {
    const validationResult = loginSchema.safeParse({ [name]: value });

    if (!validationResult.success) {
      const fieldError = validationResult.error.format()[name]?._errors[0] || '';
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: fieldError,
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateField('email', value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validateField('password', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = loginSchema.safeParse({ email, password });

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.format();
      setErrors({
        email: fieldErrors.email?._errors[0] || '',
        password: fieldErrors.password?._errors[0] || '',
      });
    } else {
      setErrors({ email: '', password: '' });
      console.log('Login successful');
      setEmail('');
      setPassword('')
      toast.success('Login successful', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

        setTimeout(()=>{
          navigate('/coaches');
        },2000)

    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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
        transition: Bounce
      />
      <CssBaseline />
      
      <Grid container>
        <Grid item xs={12} md={6} height={"100vh"} display="flex" justifyContent="center" alignItems="center">
          <Box 
            textAlign={'left'} 
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'} 
            justifyContent={'center'}  
            height={"100%"}
            paddingX={{ xs: 2, sm: 4, md: 8 }}
            component="form" 
            onSubmit={handleSubmit}
            
          >
            <Typography 
              variant="body1" 
              alignSelf={'flex-start'} 
              marginBottom={{ xs: 1, md: 2 }}
            >
              WELCOME BACK
            </Typography>

            <Typography 
              variant="h6" 
              style={{ fontWeight:"bold" }} 
              alignSelf={'flex-start'} 
              marginBottom={{ xs: 2, md: 4 }}
            >
              Log In to Your Account
            </Typography>

            <TextField
              margin="normal"
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              fullWidth
              value={email}
              onChange={handleEmailChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={{
                '& .MuiInputBase-input': {
                  fontFamily: "Montserrat",
                  fontSize: '16px',
                },
                width: { xs: '100%', sm: '500px', md: '450px' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                  fontFamily:"Montserrat",
                  fontSize:"16px"
                },
                '& .MuiInputLabel-root': {
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                }
              }}
            />

            <TextField
              margin="normal"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}  // Toggle between text and password type
              id="password"
              autoComplete="current-password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              sx={{
                width: { xs: '100%', sm: '500px', md: '450px'  },
                '& .MuiInputLabel-root': {
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                },
                
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2, 
                width: "100%", 
                maxWidth: { xs: '100%', sm: '500px', md: '450px' }, 
                height: "50px", 
                background: "#9ef300", 
                color: "black", 
                fontWeight: "bold",
                fontFamily: 'Montserrat', 
                '&:hover': {
                  background: "#5f8c09"
                } 
              }}
            >
              Login
            </Button>
            
            <Typography variant="body1">
              Don't have an account?{' '}
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Montserrat' }}
              >
                <Link to="/"><Typography component={'span'} textDecoration="none" sx={{cursor: 'pointer', fontWeight: 'bold', '&:hover': {textDecoration: "underline"}}}>CREATE NEW ACCOUNT</Typography></Link>
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid 
          item 
          xs={12} 
          md={6} 
          display="flex" 
          justifyContent={{ xs: "center", md: "flex-end" }} 
          alignItems="center"
          height={{ xs: "50vh", md: "100vh" }}
        >
          <Box
            component="img"
            sx={{
              objectFit:"",
              width: {  md: "78%" },
              height: "92vh",
              borderRadius: { xs: "20px", md: "30px" },
              marginBottom: { xs: 4, md: 0 },
              marginRight: {xs: 0, md:"90px"},
              display:{xs: "none",sm:"none", md:"block" },
               '@media (max-width: 1023px) ':{
                display:'none'
               }
            }}
            alt="Login Visual"
            
            src={Image}
          />
        </Grid>
      </Grid>
      </>
    
  );
};

export default Login;
