import React from 'react'
import './style.css'
import { GrArticle } from 'react-icons/gr'
import { BsPencilSquare } from 'react-icons/bs'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreatePage from '../../pages/CreatePage/CreatePage';
import Home from '../../pages/Home/Home';

const Navbar = () => {
  return (
    <Router>
      <div className='navbarDiv'>
        <div className='navbarTitleDiv'>
          To-Do List
        </div>
        <div className='navbarButtonsDiv'>
          <div className='todoPageButtonDiv'>
            <Link to="/">
              <GrArticle />
            </Link>
          </div>
          <div className='createTodoButtonDiv'>
            <Link to="/create">
              <BsPencilSquare />
            </Link>
          </div>
        </div>
      </div>

      <Routes>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default Navbar