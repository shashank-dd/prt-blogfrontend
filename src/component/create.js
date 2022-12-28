import React, {  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    <div className="ba">
      <div><input type="text" onChange={(e)=>{ setpost({...post,title:e.target.value}) }}></input></div>
      <div><input type="file"onChange={(e)=>{ setpost({...post,image:e.target.files[0]}) }} ></input></div>
      <div><input type="text" onChange={(e)=>{ setpost({...post,description:e.target.value}) }}></input></div>
      <div><button onClick={hh}>post</button></div>
     
      
    </div>
  )
}


export default Create;