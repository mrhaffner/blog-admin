import React from 'react';
import { Link } from "react-router-dom";

//if login true, logout, else logout?
//necessary? should be redirected if not logged in
//maybe Logout needs to be a button that runs a function on click to logout?

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Logout</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/new">New Post</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;