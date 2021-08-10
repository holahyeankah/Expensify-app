
import React, {Component} from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../Action/expense'

class AddExpensePage extends Component{
  constructor(props){
    super(props);
    
  }
  render(){

  return(
    <div>

<p className="add-space">Add your items</p>
<ExpenseForm onSubmit={(expense)=>{
      this.props.dispatch(addExpense(expense))
       this.props.history.push('/')
    }}/>
    </div>
  )

}
};


   
  
    

    export default connect()(AddExpensePage)