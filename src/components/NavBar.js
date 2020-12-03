import React from 'react';
import { Link } from "react-router-dom";

//maybe Logout needs to be a button that runs a function on click to logout?

const NavBar = (props) => {
    const { setLoggedIn } = props

    const handleLogOut = (e) => {
        e.preventDefault();
        setLoggedIn(false);
    }

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={handleLogOut} >Log Out</button>
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