import './index.css'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <Link to="/">
      <div className="HeaderBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          className="img"
          alt="website logo"
        />
      </div>
    </Link>
  )
}
export default Header
