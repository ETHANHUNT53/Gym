import React, { useState } from "react";
import gymimg from "../assets/gym.jpg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Box,
  Select,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[\W_]/, "Password must contain at least one special character"),
  target: z.string().nonempty("Target is required"),
  activity: z.string().nonempty("Activity is required"),
});

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset, 
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData) => {
    try {
      toast.success("Created Account Successfully", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      reset(); 
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      toast.error(`Registration failed: ${error.response?.data?.message || error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  
  return (
    <div >
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
        transition:Bounce
      />

      <Grid container >
        <Grid
          item
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
          md={6.5}
          lg={6.5}
          sx={{ minHeight: "98vh", padding: { xs: 2, md: 4 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "75%", sm: "65%", md: "69%", lg: "60%" },
              padding: 3,
            }}
          >
            <Typography
              sx={{
                fontWeight: 300,
                lineHeight: "24px",
                fontSize: "14px",
                width: "100%",
                textAlign: "left",
                mb: 1,
                fontFamily: "Montserrat"
              }}
            >
              LET'S GET YOU STARTED
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontStyle: "normal",
                lineHeight: "40px",
                fontSize: "24px",
                width: "100%",
                textAlign: "left",
                mb: 1,
                fontFamily: "Montserrat"
              }}
            >
              Create an Account
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
              <TextField
                label="Your Name"
                variant="outlined"
                margin="normal"
                sx={{
                  width: "100%",
                  '& .MuiOutlinedInput-root': {
                    
                    '&:hover fieldset': {
                      borderColor: 'black',
                      color: 'black'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                      color: 'black' 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },
                }}
                {...register("name")}
                error={!!errors.name} 
                helperText={errors.name ? errors.name.message : ""}
              />

              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                autoComplete="off"
                sx={{ width: "100%",
                  '& .MuiOutlinedInput-root': {
                    
                    '&:hover fieldset': {
                      borderColor: 'black',
                      color: 'black'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', 
                      color: 'black' 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },
                  
                 }}
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />

              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                type={showPassword ? "text" : "password"}
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                sx={{width:"100%",
                  '& .MuiOutlinedInput-root': {
                    
                    '&:hover fieldset': {
                      borderColor: 'black', 
                      color: 'black'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                      color: 'black' 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                autoComplete= "off"
              />

              <FormControl
                variant="outlined"
                sx={{ width: "100%",
                  '& .MuiOutlinedInput-root': {
                    
                    '&:hover fieldset': {
                      borderColor: 'black', 
                      color: 'black'
                    },
                    '&.Mui-focused fieldset': {
                      fontFamily: "Montserrat",
                      borderColor: 'black',
                      color: 'black' 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: "Montserrat",
                    color: 'black', 
                  },
                  
                 }}
                margin="normal"
                error={!!errors.target}
              >
                <InputLabel>Your Target</InputLabel>
                <Controller
                  name="target"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select label="Your Target" {...field}>
                      <MenuItem value="weight_loss" style={{fontFamily: "Montserrat"}}>Weight Loss</MenuItem>
                      <MenuItem value="muscle_gain" style={{fontFamily: "Montserrat"}}>Muscle Gain</MenuItem>
                      <MenuItem value="flexibility" style={{fontFamily: "Montserrat"}}>Flexibility</MenuItem>
                      <MenuItem value="endurance" style={{fontFamily: "Montserrat"}}>Endurance</MenuItem>
                    </Select>
                  )}
                />
                {errors.target && (
                  <Typography color="error">{errors.target.message}</Typography>
                )}
              </FormControl>

              <FormControl
                variant="outlined"
                sx={{ width: "100%",
                  '& .MuiOutlinedInput-root': {
                    
                    '&:hover fieldset': {
                      borderColor: 'black',
                      fontFamily: "Montserrat",
                      color: 'black'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                      fontFamily: "Montserrat",
                      color: 'black' 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black',
                    fontFamily: "Montserrat",
                  },
                  '& .MuiInputBase-input': {
                    color: 'black',
                    fontFamily: "Montserrat",
                  },
                 }}
                margin="normal"
                error={!!errors.activity}
              >
                <InputLabel style={{fontFamily: "Montserrat"}}>Preferrable Activity</InputLabel>
                <Controller
                  name="activity"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select label="Preferrable Activity" {...field} >
                      <MenuItem value="yoga" style={{fontFamily: "Montserrat"}}>Yoga</MenuItem>
                      <MenuItem value="crossfit" style={{fontFamily: "Montserrat"}}>CrossFit</MenuItem>
                      <MenuItem value="strength_training" style={{fontFamily: "Montserrat"}}>
                        Strength Training
                      </MenuItem>
                      <MenuItem value="cardio" style={{fontFamily: "Montserrat"}}>Cardio</MenuItem>
                    </Select>
                  )}
                />
                {errors.activity && (
                  <Typography color="error">
                    {errors.activity.message}
                  </Typography>
                )}
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "25px",
                  fontFamily:"Montserrat",
                  marginBottom: "20px",
                  backgroundColor: "#9EF300",
                  fontWeight: "bold",
                  color: "#000000",
                  cursor: "pointer",
                  "&:hover": {
                  background: "#5f8c09",
                  
                },
                }}
              >
                Create An Account
              </Button>
            </form>
            <Typography sx={{fontFamily: "Montserrat"}}>
              Already have an account?{" "}
              <Typography component={"span"} width={{ md: "block" }}>
                <Link to="/login">
                  <Typography
                    component={"span"}
                    textDecoration="none"
                    sx={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    LOGIN HERE
                  </Typography>
                </Link>
              </Typography>
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={0}
          md={5.3}
          lg={5.3}
          sx={{
            display: { xs: "none", md: "block" }, 
            backgroundImage: `url(${gymimg})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
          }}
        >
          <Box
            marginTop={"68%"}
            marginLeft={"8%"}
            marginRight={"8%"}
            marginBottom={"5%"}
            textAlign={"left"}
          >
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#ffffff"}
            >
              “The path to triumph is paved with the{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#9EF300"}
            >
              strength to train hard{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#ffffff"}
            >
              and the perseverance to{" "}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#9EF300"}
            >
              rise each time you fall
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500px"
              fontSize="32px"
              lineHeight="48px"
              component={"span"}
              color={"#ffffff"}
            >
              .”
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Registration;
