import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import selectorExpenses from '../selector/expense'
const ExpenseList=(props)=>{
    console.log(props)
    return (
        <div>
            {props.expenses.length >0 ? <h1>Here are your list items</h1> :<h1>Please enter some items</h1>}
          {props.expenses.length >0 && <div>{props.expenses.map((expense)=>{
              return <ExpenseListItems key={expense.id} {...expense}/>
          }  )}</div>
      
               
        }
         
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        expenses:selectorExpenses(state.expenses, state.filters),
        
    }
}

export default connect(mapStateToProps)(ExpenseList)