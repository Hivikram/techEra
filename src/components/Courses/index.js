import './index.css'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Loader from 'react-loader-spinner'
import CoursesList from '../coursesList'
import Failure from '../Opps'
const Courses = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [clickId, setClickId] = useState(false)
  const [bool, setBool] = useState(false)
  const [statusCode, setStatusCode] = useState(0)
  const fun = async () => {
    setBool(true)
    const url = 'https://apis.ccbp.in/te/courses'
    const obj = {
      method: 'GET',
    }
    try {
      const res = await fetch(url, obj)

      const data = await res.json()
      // console.log(data.courses)
      const code = res.status
      setStatusCode(code)
      setBool(false)
      setFetchedData(data.courses)
    } catch (err) {
      console.log(err.Status, 'ERRO')
      // setStatusCode(err)
      setClickId(true)
      setBool(false)
    }
  }
  useEffect(() => {
    fun()
  }, [])
  console.log(bool)
  console.log(statusCode)
  console.log(clickId, 'err')

  const a = () => {
    return (
      <ul className="coursesCard">
        {clickId === false ? (
          <>
            {fetchedData.map(each => (
              <CoursesList
                id={each.id}
                key={each.id}
                name={each.name}
                url={each.logo_url}
              />
            ))}
          </>
        ) : (
          <Failure />
        )}
      </ul>
    )
  }

  return (
    <div className="CoursesBg">
      <Header />
      {bool ? (
        <>
          <h1 className="coursesh">Courses</h1>
          <ul className="coursesCard">
            <div data-testid="loader">
              <Loader />
            </div>
          </ul>
        </>
      ) : (
        a()
      )}
    </div>
  )
}
export default Courses
// (
//             {statusCode !== 200 ? (
//               <Failure />
//             ) : ( <>
//                 {fetchedData.map(each => (
//                   <CoursesList
//                     id={each.id}
//                     key={each.id}
//                     name={each.name}
//                     url={each.logo_url}
//                   />
//                 ))}
//               </>
//             )
//             })
//)

//      <>
//  {fetchedData.map(each => (
//                   <CoursesList
//                     id={each.id}
//                     key={each.id}
//                     name={each.name}
//                     url={each.logo_url}/>
//                 ))}
//               </>
