import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
const CourseList = props => {
  const {name, url, id} = props
  // const clickedid=props.location.params.id
  // console.log(clickedid)
  //console.log(props)
  const click = () => {
    // setClickedI(id), console.log(id, 'ii')
    // clickedI(id)
  }
  return (
    <Link to={`/courses/${id}`}>
      <li onClick={click} id={id} className="eachCard">
        <img className="imglist" alt={name} src={url} />
        <p className="listh">{name}</p>
      </li>
    </Link>
  )
}
export default CourseList
