import React, { useEffect, useState } from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
function HomePage() {

  const [dta, setdta] = useState([])
  const [name, setname] = useState("")


  let navigate = useNavigate()
  useEffect(() => {
    axios.post("https://prtback.onrender.com/blog/data", { token: window.localStorage.getItem("token") }).then(response => {
      console.log(response.data.dat)
      setdta(response.data.dat)
      console.log("dta", dta)
      console.log(response.data.user)
      setname(response.data.user)
      // setgl(response.data.userid)
      // setta(response.data.dat)
    }).catch(error => { console.log(error, 11111111) })
  }, [])

   let logoutHandler = () =>{
      console.log(1)
              window.localStorage.removeItem('token')

              navigate("/")
           }
  return (
    <div className='homepage'>
      <div id='nav'>
        <span>Blog LoGo</span>
       <Link to="/homepage"><span id='home'>home</span></Link> 
        <Link to="/create" state={{ name: name }}> <span id='create'>create</span> </Link>
        <span id='log' onClick={logoutHandler}>Logout</span>

      </div>
      <div id='body'>
        {dta && dta.map((data) => {
          return <div id='ll'>
            <div className='l1'><img src={data.image}></img></div>
            <div className='l1' >
              <h2 className='red'  > Title  : {data.title}</h2>
              <p className='blue' id='bl' >description</p>
              <p className='blue'>{data.description}</p>
              <p className='green'> by: {name}</p>
            </div>
          </div>
        })}


      </div>

    </div>
  )
}


export default HomePage;
