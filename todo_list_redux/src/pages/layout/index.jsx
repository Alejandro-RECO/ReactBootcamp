import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deletAllTodos } from '../../redux/todoSlice/todoSlcie'
import TodoList from '../todoList'

const Form = () => {
  const dispatch = useDispatch()

  const [todoData, setTodoData] = useState({
    title: '',
    descript: ''
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
    setTodoData((prevTodoData) => ({
      ...prevTodoData,
      [name]: value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    dispatch(
      addTodo({
        title: todoData.title,
        descript: todoData.descript
      })
    )
      setTodoData({
        title: '',
        descript: '',
      })
  }

  const handleDeletAllClick = ()=>{
    dispatch(deletAllTodos())
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          id='title'
          name='title'
          value={todoData.title}
          onChange={handleChange}
        />
        <input 
          type="descript"
          id='descript'
          name='descript'
          value={todoData.descript}
          onChange={handleChange}
        />
        <button type='submit'>
          Submit
        </button>      
      </form>
      <TodoList/>
      <button onClick={handleDeletAllClick}>Delete all Tasks</button>
    </>
  )
}

export default Form
