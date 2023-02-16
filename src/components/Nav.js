import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
     
    return (
        <nav>
            <Link to="/CampPage">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/submit">Add New Site</Link>
        </nav>
    );
}

export default NavBar;
