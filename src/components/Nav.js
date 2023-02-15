import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
     
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/submit">Submit New Site</Link>
        </nav>
    );
}

export default NavBar;
