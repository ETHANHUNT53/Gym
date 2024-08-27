import Login from "./Components/Login";

import "./App.css";
import Registration from "./Components/Registration";
import { Container, Grid } from "@mui/material";
import Sample from "./Components/Sample";
import Navbar from "./Components/Navbar";
import Greeting from "./Components/Greeting";
import WorkoutCard from "./Components/WorkoutCard";
import UserProfile from "./Components/UserProfile";
// import NavBar from "./Components/Profile/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    {/* <NavBar/> */}
    </>
  );
}

export default App;
