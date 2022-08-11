import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='footerDiv'>To Do | {new Date().getFullYear().toString()}</div>
  )
}

export default Footer