import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/store/slice/userSlice';
import { Link } from 'react-router-dom';

const SingIn = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const {userId, userName, userEmail} = useSelector((state) => state.userAuth)

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({
      userName: userData.userName,
      userEmail: userData.userEmail,
      userPassword: userData.userPassword
    }));
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="userName"
        value={userData.userName}
        onChange={handleChange}
        placeholder="User Name"  
      />
      <input 
        type="email" 
        name="userEmail"
        value={userData.userEmail}
        onChange={handleChange}
        placeholder="User Email"  
      />
      <input 
        type="password" 
        name="userPassword"
        value={userData.userPassword}
        onChange={handleChange}
        placeholder="User password"  
      />
      <button type="submit">send</button>
      
    </form>

    <div>
      <h1>Welcome to {userName}</h1>
      <p>Your email is {userEmail}</p>
      <span>Id: {userId}</span>

      <Link to={'/'}>To signIn</Link>
    </div>
  </>
  )
}

export default SingIn
