import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Components/Card'
import Render from "./Components/Render";
import coaches from './assets/sample.json';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import Profile from "./Components/Profile";




function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/coaches' element = {<Render list={coaches}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
