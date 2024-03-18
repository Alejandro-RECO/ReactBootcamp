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
    <section className='w-screen flex flex-col items-center p-4'>
      <form 
        className='p-4 flex items-center gap-2'
        onSubmit={handleSubmit}>
        <input
          className='border border-gray-500 outline-gray-500 rounded-md py-1 px-3 shadow-md'
          placeholder='Title to task '
          type="text"
          id='title'
          name='title'
          value={todoData.title}
          onChange={handleChange}
        />
        <input 
          className='border border-gray-500 outline-gray-500 rounded-md py-1 px-3 shadow-md'
          placeholder='Description to task '
          type="descript"
          id='descript'
          name='descript'
          value={todoData.descript}
          onChange={handleChange}
        />
        <button
          className='border-2 font-semibold text-white/90 bg-gray-900/90 hover:bg-gray-900 hover:text-white transition-all py-1 px-4 rounded-md shadow-md' 
          type='submit'>
          Submit
        </button>      
      </form>
      <TodoList/>
      <button className='bg-gray-900/90 px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-gray-900 ' onClick={handleDeletAllClick}>Delete all Tasks</button>
    </section>
  )
}

export default Form
