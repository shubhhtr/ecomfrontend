import React from "react";
import { useState } from "react";

const AddPro= ()=>{

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [categ,setCateg]=useState("");
    const [error,setError]=useState(false);

    const submit=async ()=>{

        console.log(name,categ,price);
        if(!name || !categ || !price){
            setError(true);
            return false;
        }
        
        
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
            {error && !name && <span className="invalid">Please provide valid name</span>}
            <input className="inputbox" type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
            {error && !price && <span className="invalid">Please provide valid price</span>}
            <input className="inputbox" type="text" onChange={(e)=>setCateg(e.target.value)} placeholder="Enter Category" />
            {error && !categ && <span className="invalid">Please provide valid category</span>}
            <button onClick={submit}>Add</button>
        </div>
    </>
}

export default AddPro;