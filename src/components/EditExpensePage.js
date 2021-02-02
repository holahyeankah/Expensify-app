import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense} from '../Action/expense';
import {editExpense} from '../Action/expense'


class EditExpensePage extends Component{
    constructor(props){
        super(props)
    }
render(){

        return(
            <div>
              <ExpenseForm 
              expense={this.props.expense}
              onSubmit={(expense)=>{
            this.props.dispatch(editExpense(this.props.expense.id, expense))
             this.props.history.push('/dashboard')
              }}
              /><br/>
              <button className="remove-button" onClick={()=>{this.props.dispatch(removeExpense({id:this.props.expense.id}));
                  this.props.history.push('/dashboard')
            }}>Remove Expense</button>
          
            </div>
        )
    }
    }
    const mapStateToProps=(state,props)=>{
        return {
            expense:state.expenses.find((expense)=>expense.id === props.match.params.id)
        };
    }


export default connect(mapStateToProps)(EditExpensePage)