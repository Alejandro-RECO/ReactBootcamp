import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/home/index.jsx";
import Login from "./pages/login.js";
import Page404 from "./pages/page404/index.jsx";
import { useEffect } from "react";
import { client } from "./supabase/client.js";
import { TaskContextProvider } from "./context/TaskContext.jsx";


function App() {
  const navigate = useNavigate()
  useEffect(() =>{
    client.auth.onAuthStateChange((event, session) =>{
      if(!session){
        navigate('/login')
      }else{
        navigate('/')
      }
    })
  },[])

  return (
    <>
    <TaskContextProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </TaskContextProvider>
    </>
  );
}

export default App;
