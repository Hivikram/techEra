import './index.css'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Failure from '../Opps'
import Header from '../Header'
const UniqCourse = props => {
  const [result, setResult] = useState({})
  const [loaderr, setLoaderr] = useState(false)
  const [code, setCode] = useState(0)
  const [err, setErr] = useState(false)
  const clickedid = props.location.pathname
  //{data: '', statuscode: ''}
  const back = () => {
    const r = props.history.push('/')
  }
  const fun2 = async () => {
    setLoaderr(true)
    const url = `https://apis.ccbp.in/te${clickedid}`
    const onj = {
      method: 'GET',
    }

    try {
      const res = await fetch(url, onj)
      //console.log(res.headers.status)
      const data = await res.json()
      const statuscode = res.status
      const data2 = data.course_details
      setCode(statuscode)
      setResult(data2)
      setLoaderr(false)
    } catch (err) {
      console.log(err, 'p')
      setErr(true)
      setLoaderr(false)
    }
    // setR({...r,result})
  }

  useEffect(() => fun2(), [])

  const showLoder = () => {
    return (
      <div data-testid="loader">
        <Loader />
      </div>
    )
  }
  const displayContent = () => {
    return (
      <div className="listdiv2">
        <img className="imglist2" alt={result.name} src={result.image_url} />
        <div>
          <h1>{result.name}</h1>
          <p>{result.description}</p>
        </div>
      </div>
    )
  }

  //   console.log(r)
  console.log(result.id)
  console.log(err, 'err')
  return (
    <div className="UniqCourseBg">
      <Header />
      <div className="listdiv2">
        {loaderr ? (
          showLoder()
        ) : (
          <>{err === false ? displayContent() : <Failure />}</>
        )}
      </div>
      <button className="listbtn" onClick={back}>
        Back
      </button>
    </div>
  )
}
export default UniqCourse
//   <>
//     <img
//       className="imglist2"
//       alt={result.name}
//       src={result.image_url}
//     />
//     <div>
//       <h1>{result.name}</h1>
//       <p>{result.description}</p>
//     </div>
//   </>
// )}
