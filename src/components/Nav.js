import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
     
    return (
        <nav>
            <Link to="/campsites">Home</Link>
            <Link to="/camping-ethics">Camping Ethics</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/submit">Add New Site</Link>
        </nav>
    );
}

export default NavBar;
