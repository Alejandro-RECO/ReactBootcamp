import {  Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SingIn from "./pages/singIn";
import Home from "./pages/home";


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign-in" element={<SingIn/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
};

export default App;
