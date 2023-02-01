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
            <img className="logo" src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-1250x600.png.webp"
             alt="logo" />

            {
                vali ? <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add</Link></li>
                    <li><Link to="/update/test">Update</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li className="lout"><Link onClick={Logout} to="/signup">LogOut ({JSON.parse(vali).name})</Link></li>
                </ul>
                :
                <ul className="log">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            }
        </div>
    );
}

export default Nav;