import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../apiCalls'
import "./style.css"

const Auth = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({
    "username": undefined,
    "password": undefined,
  })

  const loginButtonClick = () => {
    login(data)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.userName);
      localStorage.setItem("userId", res.data.userId);
      navigate("/")
      window.location.reload(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const registerLinkClick = () => {
    navigate("/register")
  }

  return (
    <div className='authDiv'>
      <div className='authContainerDiv'>
        <h1 style={{ textAlign: "center"}}>
          Welcome !
        </h1>
        <div className='authUsernameInputDiv'>
          <input className='authUsernameInput' placeholder='Username' onChange={(e) => setData({...data, username: e.target.value})}/>
        </div>
        <div className='authPasswordInputDiv'>
          <input className='authPasswordInput' placeholder='Password' onChange={(e) => setData({...data, password: e.target.value})}/>
        </div>
        <div className='registerLinkDiv' onClick={registerLinkClick}>
          Register
        </div>
        <div className='loginButtonDiv'>
          <button className='loginButton' onClick={loginButtonClick}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Auth