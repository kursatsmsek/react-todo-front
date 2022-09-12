import React, { useEffect } from 'react'
import './style.css'
import { GrArticle } from 'react-icons/gr'
import { BsPencilSquare } from 'react-icons/bs'
import { BiUser, BiExit } from 'react-icons/bi'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";
import CreatePage from '../../pages/CreatePage/CreatePage';
import Home from '../../pages/Home/Home';
import Auth from '../../pages/Auth/Auth'
import Register from '../../pages/Register/Register'

const Navbar = () => {

  // const navigate = useLocation()

  const logOutClick = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    window.location.reload(false);
  }


  return (
    <Router>
      <div className='navbarDiv'>
        <div className='navbarTitleDiv'>
          To-Do List
        </div>
        <div className='navbarButtonsDiv'>
          {
            localStorage.getItem("userId") !== null ?
              [
              <div className='todoPageButtonDiv'>
                <Link to="/">
                  <GrArticle />
                </Link>
              </div>,
              <div className='createTodoButtonDiv'>
                <Link to="/create">
                  <BsPencilSquare />
                </Link>
              </div>,
              <div className='exitButtonDiv'>
                <BiExit onClick={logOutClick} />
              </div>
              ]
              :
              <div className='userButtonDiv'>
                <Link to="/auth">
                  <BiUser />
                </Link>
              </div>
          }
        </div>
      </div>

      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default Navbar