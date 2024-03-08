import React from 'react'
import Layout from '../layout/Layout'

const NewTodoList = () => {
  return (
    <Layout 
      nameLink={'SAVE'}
      title={'NEW TODO'}
      to={'/'}
    >
      <div className='todo-detail'>
        <input  className='details' type="text" placeholder='TODO Title' />
        <input className='details' type="text" placeholder='TODO Creation Time' />
        <textarea className='details' cols="30" rows="10" placeholder='TODO Description'></textarea>
      </div>
    </Layout>
  )
}

export default NewTodoList
