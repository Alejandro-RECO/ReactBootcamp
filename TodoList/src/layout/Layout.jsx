import './layaut.css'
import React from 'react'

const Layout = ({title, children}) => {
  return (
    <section className='container'>
      <h1 className='title'>{title}</h1>
      <div className='content'>
        {children}
      </div>
    </section>
  )
}

export default Layout
