import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
    }
       

    render(){
      
        
    return(
        <div className="header-logo">
            <div className="header-style">
<Link className="header-top" to="">
    <h1>Home</h1>
        </Link>

 <Link className="header-top" to="/">
    <h1> Exemplify</h1> 
  
    </Link> 
</div>


        </div>
    )
}
}
   

export default Header;