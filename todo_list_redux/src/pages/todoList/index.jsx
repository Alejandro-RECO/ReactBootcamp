import React from 'react'
import { useSelector } from 'react-redux'
import Todo from '../../componets/todo';
import Todoscomplete from '../../componets/todoscomplete';

const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  // console.log(todos);

  if (todos.length === 0) return <p className='py-5 font-semibold'>Not tastk there...</p>

  return (
    <div className='w-[500px] p-4'>
      <ul className='flex flex-col justify-center gap-5'>
        {
          todos.map((item)=>(
            <Todo
              key={item.id}
              id={item.id}
              descript={item.descript}
              done={item.done}
              title={item.title}
            />
          ))
        }
      </ul>
      <Todoscomplete/>
    </div>
  )
}

export default TodoList
