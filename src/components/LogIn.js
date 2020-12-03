import React, { useState, } from 'react';
import { useHistory } from "react-router-dom";

const LogIn = (props) => {
    const { loggedIn, setLoggedIn } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const logInUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            console.log('response:', data);
            console.log('token:', data.token);
            localStorage.setItem('JWT', data.token);
            setLoggedIn(true)
            history.push(`/blog`);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Please Log In</h2>
            <form action="">
                <label htmlFor="username">Username</label><br/>
                <input type="text" onChange={(e) => setUsername(e.target.value)} required /><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} required /><br/>
                <button onClick={logInUser} >Log In</button>
            </form>
        </div>
    );
}

export default LogIn;