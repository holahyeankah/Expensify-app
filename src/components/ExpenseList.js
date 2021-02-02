import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import selectorExpenses from '../selector/expense'
class ExpenseList extends Component{
    constructor(props){
        super(props);
       
    }
  
  
    
    render(){
       
       const{expenses}=this.props
        
    return (
        <div>
            {expenses.length >0 ? <h1>Here are your list items</h1> :<h1>Please enter some items</h1>}
            <div className="headings" >
                <p >Expense</p>
                <p>Amount</p>
            </div>
            <div className="expense-null">

            {!expenses.length && <p>No expenses</p>}

            </div>
          {expenses.length >0 && <div>{expenses.map((expense)=>{
              return <ExpenseListItems key={expense.id} {...expense}/>
          }  )}</div>
      
               
        }
         
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        expenses:selectorExpenses(state.expenses, state.filters),
        
    }
}

export default connect(mapStateToProps)(ExpenseList)