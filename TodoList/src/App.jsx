import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import TodoList from './pages/TodoList'
import NewTodoList from './pages/NewTodoList'
import DetailsTodoList from './pages/DetailsTodoList'
import PageNotFund from './pages/PageNotFund'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoList/>}/>
          <Route path='/new-todo' element={<NewTodoList/>}/>
          <Route path='/details-todo' element={<DetailsTodoList/>}/>
          <Route path='*' element={<PageNotFund/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
