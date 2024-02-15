import React from 'react'

import { RiChat3Line, RiServiceLine, RiShareBoxLine } from "react-icons/ri";
import {IconsList} from './spanIcons';

const Target = ({
  userName,
  userImage,
  cardImage,
  cardTitle,
  cardDescription,
  targetDate
}) => {
  return (
    <article className='w-[320px]'>
        <img className='w-full h-[160px] rounded-sm' src={cardImage} alt={cardTitle}/>
        <div className='py-3 flex items-center gap-3'>
          <img className='h-5 rounded-full' src={userImage} alt={`Profile of ${userName}`} />
          <h3 className='text-sm font-semibold'>{userName} in Globant</h3>
        </div>
        <h4 className='text-xl font-bold py-2'>{cardTitle}</h4>
        <p className='text-base text-gray-500 pb-2'>{cardDescription}</p>
        <time className='block text-sm text-gray-500'>{targetDate}</time>
        <footer className='flex justify-between items-center gap-5 py-3 border-t border-gray-200'>
          <div className='flex items-center gap-5'>
            <IconsList icon={<RiServiceLine />} num="330" text="sm" />
            <IconsList icon={<RiChat3Line />} num="7" text="sm" />
          </div>
          <div>
            <IconsList icon={<RiShareBoxLine />} text="xl" />
          </div>
        </footer>
      </article>
  )
}

export default Target
