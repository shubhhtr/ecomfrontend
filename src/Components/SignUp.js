import React,{useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";


const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const vali=localStorage.getItem("user");
        if(vali){
            navigate("/");
        }
    });
    

    const collectData=async ()=>{
        console.log(name,email,pass);

        let result=await fetch("http://localhost:5000/register", {
            method:"post",
            body: JSON.stringify({name,email,pass}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.log(result);

        localStorage.setItem("user",JSON.stringify(result));

        if(result){
            navigate("/");
        }
    }

    return (
        <div className="signup">
            <h1>Register</h1>
            <input type="text" className="inputbox"
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>


            <input type="text" className="inputbox"
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>


            <input type="password" className="inputbox"
            value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Enter Password"/>


            <button type="button" onClick={collectData}>Sign Up</button>
        </div>
    );
}

export default SignUp;