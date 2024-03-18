import React from 'react'
import { useSelector } from 'react-redux'

const Todoscomplete = () => {

  const todoscomplete = useSelector((state) =>
    state.todo.filter((item) => item.done === true)
  )

  return (
    <h4 className='py-2 px-3 mt-5 border border-gray-300 shadow-md rounded-md text-sm w-[170px] mt-2 font-semibold'>Total complete todo {todoscomplete.length}</h4>
  )
}

export default Todoscomplete
