import React from 'react'
import './index.scss'

const Card = ({
  quote,
  image,
  name,
  loading
}) => {
  return (
    <section className='container__quotes'>
      <div className='container__quote'>
        {
          loading ?  <img src='./gif/loading.gif' alt='loading'/>:
          <>
            <p className='container__p'>{quote}</p>
            <figure className='container__figure'>
              <img 
                className='container__imges'
                src={image} 
                alt={`${name} image`} />
            </figure>
          </>

        }
      </div>
      <h5 className='container__h5'>{name}</h5>
    </section>
  )
}

export default Card
