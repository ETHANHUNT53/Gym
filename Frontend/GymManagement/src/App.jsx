import "./App.css";
import Registration from "./Components/Registration";
import Login from "./components/Login";
import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
// import NavBar from "./Components/Profile/NavBar";


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
});


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
