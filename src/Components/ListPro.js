import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListPro=()=>{
    
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async ()=>{
        let result=await fetch("http://localhost:5000/get-pro");
        result= await result.json();
        setProducts(result);
    }

    const deletePro=async (id)=>{
        console.warn(id);
        let result=await fetch(`http://localhost:5000/product/${id}`,{
            method:"delete"
        });
        result= await result.json();
        if(result){
            getProducts();
        }
    }

    return <>
        <div className="productlist">
            <h2>Products</h2>

            <ul>
                <li>S No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item,index)=>
                    <ul>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.categ}</li>
                        <li>
                            <button onClick={()=>deletePro(item._id)}>Delete</button>
                            <Link to={"/update/"+item._id}>Update</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    </>
}

export default ListPro;