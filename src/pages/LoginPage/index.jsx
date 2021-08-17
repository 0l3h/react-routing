import React from 'react';

function LoginPage() {
    return (
        <div className='page-container'>
            <form>
                <h1>Log In</h1>
                <legend>Email</legend>
                <input type="email"/>
                <legend>Password</legend>
                <input type="password"/>
            </form>
        </div>
    )
}

export default LoginPage;
