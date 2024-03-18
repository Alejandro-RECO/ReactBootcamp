import React from 'react'
import { useInputState } from '../hooks/useInputState'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [userLogin, handleChange] = useInputState({
    userEmail: '',
    userPassword: ''
  })
  const {userEmail, userPassword} = useSelector((state) => state.userAuth)
  const redirect = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    if( userLogin.userEmail === userEmail && userLogin.userPassword === userPassword){
      redirect('/home')
    }else{
      alert('Your credentials is incorrect')
    }
  }


  return (
    <>  
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name='userEmail'
          value={userLogin.userEmail || ''}
          onChange={handleChange}
          placeholder='Email'
        />
        <input 
          type="text"
          name='userPassword'
          value={userLogin.userPassword || ''}
          onChange={handleChange}
          placeholder='Password'
        />
        <button type="submit">Enviar</button>
      </form>
      <p>user email: {userEmail}</p>
      <span>your password: {userPassword}</span>
      <Link to={'/sign-in'}>To signIn</Link>
    </>
  )
}

export default Login
