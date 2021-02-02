import React from 'react';
import {Link} from 'react-router-dom'
const Login =()=>{
    return (
       
        <div className="header">
            <div className="header-align">
<h1 className="header-title">Expensify App</h1>
<p>its time to get your expenses under control</p>
<Link to="/dashboard">
            <button className="login-button">Login </button>
            </Link>
            </div>
        
        </div>
    )
}

export default Login