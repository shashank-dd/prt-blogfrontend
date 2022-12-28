import React, {  useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './create.css';

const Create = () => {
    let navigate = useNavigate()
const [post,setpost]=useState({ title:"",image:"",description:""})
const location =useLocation();
useEffect(()=>{
    console.log(777)
    console.log(location.state.name)
 setpost({
    name:location.state.name,
    ...post
 })
},[])
let logoutHandler = () =>{
  console.log(1)
          window.localStorage.removeItem('token')

          navigate("/")
       }
async function hh() {

    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    }
    const data = await axios.post("https://prtback.onrender.com/blog/post", post, config)
    console.log(data)
    if (data.data.ok === "ok") {
        navigate("/homepage")
    
    }
}

  return (
    <div>
      <div id='nav'>
        <span>Blog LoGo</span>
        
       <Link to="/homepage"><span id='home'>home</span></Link> 
        <Link to="/create" > <span id='create'>create</span> </Link>
        <span id='log' onClick={logoutHandler}>Logout</span>
        <div className="ba">
      <div><input type="text" onChange={(e)=>{ setpost({...post,title:e.target.value}) }}></input></div>
      <div><input type="file"onChange={(e)=>{ setpost({...post,image:e.target.files[0]}) }} ></input></div>
      <div><input type="text" onChange={(e)=>{ setpost({...post,description:e.target.value}) }}></input></div>
      <div><button onClick={hh}>post</button></div>
     
      
    </div>

      </div>
    </div>
    
  )
}


export default Create;