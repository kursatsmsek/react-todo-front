import React from 'react'
import './style.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreatePage from '../../pages/CreatePage/CreatePage';
import Home from '../../pages/Home/Home';

const Content = () => {
  return (
    <div className='contentDiv'>
      Content
    </div>
  )
}

export default Content