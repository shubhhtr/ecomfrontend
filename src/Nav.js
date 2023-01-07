import React from "react";
import {Link} from "react-router-dom";

const Nav=()=>{
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    );
}

export default Nav;