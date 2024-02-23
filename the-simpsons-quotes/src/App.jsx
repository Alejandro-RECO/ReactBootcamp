import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './pages/error404'
import Home from './pages/home'
import Index from './pages/principal'

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
