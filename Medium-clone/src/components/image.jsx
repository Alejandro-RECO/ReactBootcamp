import React from 'react'

const Image = ({backgroundImage, alt}) => {
  return (
    <div >
      <figure>
        <img className='mb-3' src={backgroundImage} alt={alt} />
        <figcaption className='flex items-center justify-center text-sm text-gray-500'>
          <span className='mr-1'>Photo by </span> <a href="https://unsplash.com" rel="noopener noreferrer" target="_blank" className="underline">{alt}</a>
        </figcaption>
      </figure>
    </div>
  )
}

export default Image
