import { Link } from 'react-router-dom'
import './layaut.css'
import React from 'react'

const Layout = ({title, children, to, nameLink}) => {
  return (
    <section className='container'>
      <h1 className='title'>{title}</h1>
      <div className='content'>
        {children}
      </div>
      <Link className="link-newTodo" to={to}>{nameLink}</Link>
    </section>
  )
}

export default Layout
