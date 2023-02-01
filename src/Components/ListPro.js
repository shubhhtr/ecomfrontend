import React from "react";
import { useState, useEffect } from "react";

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

    console.warn("products",products);

    return <>
        <div className="productlist">
            <h2>Products</h2>

            <ul>
                <li>S No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>
            {
                products.map((item,index)=>
                    <ul>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.categ}</li>
                    </ul>
                )
            }
        </div>
    </>
}

export default ListPro;