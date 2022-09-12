import React, { useEffect, useState } from 'react'
import { register } from '../../apiCalls'
import { BsFillCheckCircleFill } from "react-icons/bs"
import "./style.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [isFormShow, setFormShow] = useState(true)

  const [data, setData] = useState({
    name: undefined,
    username: undefined,
    email: undefined,
    password: undefined
  })

  useEffect(() => {
    console.log(data);
  }, [data])

  const registerButtonClick = (e) => {
    e.preventDefault();
    register(data)
    .then((res) => {
      console.log(res);
      setFormShow(false);
      setTimeout(() => {
        navigate("/auth")
      }, 2000)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='registerPageDiv'>
      {
        isFormShow ?
        <form>
          <div className='registerContainer'>
            <h1>Join Us !</h1>
            <div className='registerNameDiv'>
              <input placeholder='Name' required onChange={(e) => setData({...data, name: e.target.value})}/>
            </div>
            <div className='registerUsernameDiv'>
              <input placeholder='Username' required onChange={(e) => setData({...data, username: e.target.value})}/>
            </div>
            <div className='registerEmailDiv'>
              <input type="email" required placeholder='E-mail' onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div className='registerPasswordDiv'>
              <input type="password" required placeholder='Password' onChange={(e) => setData({...data, password: e.target.value})}/>
            </div>
            <div className='registerButtonDiv'>
              <button className='registerButton' onClick={registerButtonClick}>Register</button>
            </div>
          </div>
        </form> :
        <div className='succesRegisterDiv'>
          <BsFillCheckCircleFill className='succesRegisterIcon'/>
          <label className='succesRegisterText'>Account has been created !</label>
          <label>you're redirecting to the login page..</label>
        </div>
      }
    </div>
  )
}

export default Register