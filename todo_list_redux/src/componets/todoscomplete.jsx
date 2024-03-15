import React from 'react'
import { useSelector } from 'react-redux'

const Todoscomplete = () => {

  const todoscomplete = useSelector((state) =>
    state.todo.filter((item) => item.done === true)
  )

  return (
    <h4>Total complete todo {todoscomplete.length}</h4>
  )
}

export default Todoscomplete
