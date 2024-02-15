import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <div className='relative'>
      <RiSearch2Line className='absolute left-3 top-2 text-gray-500 text-xl'/>
      <input className='p-2 pl-10 w-[234px] h-[37px] bg-gray-50 rounded-2xl focus:outline-none' placeholder='Search'/>
    </div>
  )
}

export default Search
