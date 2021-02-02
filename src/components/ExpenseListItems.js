import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ExpenseListItems=({id, description, amount,notes,createdAt})=>(
  
        <Link  className="edit-page" to ={`/edit/${id}`}>
            <div>
        <h3>{description}</h3>
        <h4>{notes}</h4>

 <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
 </div>
 <h3>{numeral(amount/100).format('$0,0.00')}</h3>

        </Link>
)

export default connect()(ExpenseListItems)