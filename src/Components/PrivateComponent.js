import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute=()=>{
    const vali=localStorage.getItem("user");

    if(vali) return <Outlet />;
    else return <Navigate to="/signup" />;
}

export default PrivateRoute;