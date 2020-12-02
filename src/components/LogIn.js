import React from 'react';

const LogIn = (props) => {
    return (
        <div>
            <h2>Please Log In</h2>
            <form action="">
                <label htmlFor="username">Username</label><br/>
                <input type="text"/><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password"/><br/>
                <button>Log In</button>
            </form>
        </div>
    );
}

export default LogIn;