import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'

const TodoList = () => {
  return (
    <Layout title={'TODO LIST'}>
      <div>
        <h2>TODO 1</h2>
        <span>X</span>
      </div>

      <Link to={'/new-todo'}>New Todo</Link>

    </Layout>
  )
}

export default TodoList
