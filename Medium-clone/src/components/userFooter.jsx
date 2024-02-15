import React from 'react';
import { RiMailAddLine } from "react-icons/ri";

const UserFooter = ({
  userImage,
  username,
  globantImage,
  ulrLinked
}) => {
  return (
    <footer className='flex flex-col w-[720px] border-b border-gray-300'>
      <figure className='relative'>
        <img className='rounded-full h-16 bg-cover' src={userImage} alt={`Profile of ${username}`} />
        <img className='absolute bottom-0 left-12 bg-white rounded-full h-9 border' src={globantImage} alt="Logo of Globant" />
      </figure>
      <section className='text-2xl pl-2 my-3 font-semibold flex items-center justify-between'>
        <div>
          <h2>Written by {username}</h2>
          <p className='text-gray-600 text-sm'>31 Followers. Writer for <span className='text-gray-900'>Globant</span></p>
          <p className='text-sm py-5 text-gray-600 border-gray-300'>
            <a href={ulrLinked} className="text-gray-800 underline">{ulrLinked}</a>
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <button className='py-2 px-4 text-sm bg-gray-900 rounded-full text-gray-200'>Follow</button>
          <RiMailAddLine className='h-9 w-9 p-2 text-sm rounded-full text-gray-200 bg-black' />
        </div>
      </section>
    </footer>
  )
}

export default UserFooter;