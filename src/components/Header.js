import React from 'react';
import {Link} from 'react-router-dom'


const Header=()=>{
    return(
        <div className="header-logo">
            <div className="header-style">
<Link className="header-top" to="/dashboard">
    <h1>Exemplify</h1>
        </Link>

<Link className="header-top" to="">
  <h1> Logout</h1> 
    </Link>
</div>


        </div>
    )
}
   

export default Header