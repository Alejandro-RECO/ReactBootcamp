import React from 'react'
import { useSelector } from 'react-redux'
import Todo from '../../componets/todo';
import Todoscomplete from '../../componets/todoscomplete';

const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  // console.log(todos);

  if (todos.length === 0) return <p>Not tastk there</p>

  return (
    <div>
      <ul>
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
