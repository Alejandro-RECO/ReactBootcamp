import React from 'react'
import Layout from '../layout/Layout'

import '../styles/todoDetail.css'

const DetailsTodoList = () => {
  return (
    <Layout 
      nameLink={'Back to list'}
      title={'TODO Detail'}
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

export default DetailsTodoList
