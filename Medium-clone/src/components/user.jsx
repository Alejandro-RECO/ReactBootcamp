import React from 'react'
import { IconsList } from './spanIcons'

import { RiChat3Line,RiServiceLine,RiFlag2Line, RiPlayCircleLine,RiShareBoxLine   } from "react-icons/ri";


const User = ({userImage, username, globantImage, publishedBy}) => {
  return (
    <article aria-labelledby="username" className='mb-11 '>
      <header className='flex gap-7 mb-8'>
        <figure className='relative'>
          <img className='rounded-full h-13 bg-cover' src={userImage} alt="" aria-hidden="true" />
          <figcaption id="username" className='sr-only'>{username}</figcaption>
          <img className='absolute bottom-0 left-9 bg-white rounded-full h-6 border' src={globantImage} alt="Published by Globant" />
        </figure>
        <div>
          <h5>{username} · <button className='text-green-700/70 hover:text-green-700 transition-colors'>Follow</button></h5>
          <p className='text-sm'>
            Published in {publishedBy}
            <time dateTime="2024-01-16"> · 21 min read · Jan 16, 2024</time>
          </p>
        </div>
      </header>
      <footer className='border-t border-b p-1 border-gray-200 justify-between flex items-center gap-5'>
        <div className='p-2 flex items-center gap-5'>
          <IconsList icon={<RiServiceLine />} num={"330"} text="sm" />
          <IconsList icon={<RiChat3Line />} num={"7"} text="sm" />
        </div>
        <div className='p-2 flex items-center gap-5'>
          <IconsList icon={<RiFlag2Line />} text="xl" />
          <IconsList icon={<RiPlayCircleLine />} text="xl" />
          <IconsList icon={<RiShareBoxLine />} text="xl" />
        </div>
      </footer>
    </article>
  )
}


export default User
