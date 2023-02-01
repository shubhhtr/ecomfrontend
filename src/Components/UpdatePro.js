import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePro=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [categ,setCateg]=useState("");
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getDetail();
    },[]);

    const getDetail=async ()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`);
        result= await result.json();
        setName(result.name);
        setPrice(result.price);
        setCateg(result.categ);
    }

    const submit=async ()=>{
        //console.log(name,categ,price);
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"Put",
            body: JSON.stringify({name,price,categ}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.warn(result);
        navigate("/");
    }


    return <>
        <div className="updatepro">
            <h1>Update Product</h1>
            <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            
            <input className="inputbox" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
            
            <input className="inputbox" type="text" value={categ} onChange={(e)=>setCateg(e.target.value)} placeholder="Enter Category" />
            
            <button onClick={submit}>Update</button>
        </div>
    </>
}

export default UpdatePro;