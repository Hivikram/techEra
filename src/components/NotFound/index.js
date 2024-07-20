import './index.css'
import React, {useState} from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
const Notfound = () => {
  return (
    <Link to="/bad-path">
      <div className="bg">
     <Link>   <Header /></Link>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          className="NotfoundImg"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    </Link>
  )
}
export default Notfound
