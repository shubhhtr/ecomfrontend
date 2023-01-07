import React,{useState} from "react";


const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const collectData=()=>{
        console.log(name,email,pass);
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