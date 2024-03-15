import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./pages/layout"

const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
