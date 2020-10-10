import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const ExpenseListItems=({id, description, amount,notes,createdAt})=>(
    <div>
        <Link to ={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
<h4>{notes}</h4>

<p>{amount}- {createdAt}</p>

    </div>
)

export default connect()(ExpenseListItems)