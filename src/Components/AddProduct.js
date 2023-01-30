import React from "react";
import { useState } from "react";

const AddPro= ()=>{

    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);
    const [categ,setCateg]=useState("");

    const submit=async ()=>{
        
        const userid=JSON.parse(localStorage.getItem("user"))._id;
        console.log(userid);
        let result= await fetch("http://localhost:5000/add-pro",{
            method:"post",
            body: JSON.stringify({name,price,categ,user_id:userid}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result=await result.json();
        console.log(result);
        if(result) alert("Item Added");

    }

    return <>
        <div className="addpro">
            <h1>Add Product</h1>
            <input className="inputbox" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputbox" type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
            <input className="inputbox" type="text" onChange={(e)=>setCateg(e.target.value)} placeholder="Enter Category" />
            <button onClick={submit}>Add</button>
        </div>
    </>
}

export default AddPro;