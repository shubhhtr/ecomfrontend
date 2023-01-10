import React,{useState} from "react";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const collectData=()=>{
        console.log(email,pass);
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