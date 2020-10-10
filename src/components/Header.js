import React from 'react';
import {NavLink} from 'react-router-dom'


const Header=()=>{
    return(
        <div>
<h1>EXEMPLIFY</h1>
<NavLink to="/" activeClassName="active" exact={true}>Dashboard</NavLink>
<NavLink to="/create" activeClassName="active">AddPage</NavLink>
<NavLink to="/help" activeClassName="active">Help</NavLink>


        </div>
    )
}
   

export default Header