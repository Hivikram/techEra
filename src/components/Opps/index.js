import './index.css'
import React, {useState} from 'react'

const Failure = () => {
  return (
    <div className="oppsbg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        className="NotfoundImg"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you ard looking for</p>
      <button className="retrybtn">Retry</button>
    </div>
  )
}
export default Failure
