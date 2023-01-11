import React from "react";
import {Link,useNavigate} from "react-router-dom";



const Nav=()=>{
    const vali=localStorage.getItem("user");
    const navigate=useNavigate();

    const Logout=()=>{
        console.log("check");
        localStorage.clear();
        navigate("/signup");
    }

    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                
                {
                    vali ? <li><Link onClick={Logout} to="/signup">Logout</Link></li> :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </>
                }

            </ul>
        </div>
    );
}

export default Nav;