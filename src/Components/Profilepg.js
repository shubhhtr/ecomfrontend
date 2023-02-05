import React, { useEffect, useState } from 'react'
import dp from "../defaultprofile.png"

function Profilepg() {

  const [data, setData]=useState({name:"",email:""});

  useEffect(()=>{
    let temp=localStorage.getItem("user");
    temp=JSON.parse(temp);
    setData(temp);
  },[]);

  return (
    <div className="profile-section">
        <img src={dp} alt="Default Profile" />
        <h3>Name: {data.name}</h3>
        <h4>Email: <a href="http://gmail.com">{data.email} </a> </h4>
    </div>
  )
}

export default Profilepg