import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, CssBaseline, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';  
import Image from '../assets/download.png';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password cannot be less than 8 characters" })
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[\W_]/, "Password must contain at least one special character"),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const validateField = (name, value) => {
    const validationResult = loginSchema.safeParse({ [name]: value });
    if (!validationResult.success) {
      const fieldError = validationResult.error.format()[name]?._errors[0] || "";
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateField("email", value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validateField("password", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationResult = loginSchema.safeParse({ email, password });
    
    
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.format();
      setErrors({
        email: fieldErrors.email?._errors[0] || "",
        password: fieldErrors.password?._errors[0] || "",
      });
      return;
    }
    
    
    
    try {
      const res = await axios.post("https://y2dn949cai.execute-api.eu-west-3.amazonaws.com/api/signin",validationResult.data)
      
      if(res.status === 200){

        localStorage.setItem("userEmail" , email)

        toast.success("Login successful", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
    
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      }
  
    } catch (error) {
      toast.error(`Login failed: ${error.response?.data?.message || error.message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
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
        transition={Bounce}
      />
      <CssBaseline />

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          height={"100vh"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            textAlign={"left"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            paddingX={{ xs: 2, sm: 4, md: 8 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <Typography
              variant="body1"
              alignSelf={"flex-start"}
              marginBottom={{ xs: 1, md: 2 }}
              style={{fontFamily: "Montserrat"}}
            >
              WELCOME BACK
            </Typography>

            <Typography
              variant="h6"
              style={{ fontWeight: "bold",
                fontFamily: "Montserrat"
               }}
              alignSelf={"flex-start"}
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
                "& .MuiInputBase-input": {
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                },
                width: { xs: '100%', sm: '500px', md: '450px' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                },
              }}
            />

            <TextField
              margin="normal"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"} 
              id="password"
              autoComplete="current-password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              sx={{
                width: { xs: '100%', sm: '500px', md: '450px' },
                '& .MuiInputLabel-root': {
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
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
                fontFamily: "Montserrat",
                "&:hover": {
                  background: "#5f8c09",
                },
              }}
            >
              Login
            </Button>

            <Typography variant="body1" style={{fontFamily: "Montserrat"}}>
              Don't have an account?{" "}
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontFamily: "Montserrat",
                }}
              >
                <Link to="/">
                  <Typography
                    component={"span"}
                    textDecoration="none"
                    sx={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                      fontFamily: "Montserrat"
                    }}
                  >
                    CREATE NEW ACCOUNT
                  </Typography>
                </Link>
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
              objectFit: "",
              width: { md: "78%" },
              height: "92vh",
              borderRadius: { xs: "20px", md: "30px" },
              marginBottom: { xs: 4, md: 0 },
              marginRight: { xs: 0, md: "90px" },
              display: { xs: "none", md: "block" }, 
            }}
            alt="Image"
            src={Image}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
