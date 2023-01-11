import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const vali=localStorage.getItem("user");
        if(vali){
            navigate("/");
        }
    })

    const collectData=async ()=>{
        console.log(email,pass);
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body: JSON.stringify({email,pass}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result= await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");
        }
        else{
            alert("Email or Password is wrong");
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input className="inputbox" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbox" type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData}>Login</button>
        </div>
    )
}

export default Login;