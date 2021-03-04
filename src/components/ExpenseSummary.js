import React from 'react'
import {connect} from 'react-redux';
import Selector from '../selector/selector-Total';
import visibleExpenses from '../selector/expense';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

const ExpenseSummary=({expenseCount, expenseTotal})=>{
    const expenseWord=expenseCount > 1 ? 'expenses': 'expense'
    const Total= numeral(expenseTotal/100).format('$0,0.00')
    

    return (
        <div>
            <div className="page-style-link">
            <h1 className="page-style"> You are viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{Total}</span></h1>
            </div>
            <div className="add-button--link">
                <Link className="add-button" to="/create">Add expense</Link>
            </div>
            

        </div>
    )
}
const mapStateToProps=(state)=>{
    const visible=visibleExpenses(state.expenses, state.filters);
    return {
     expenseCount:visible.length,
      expenseTotal:Selector(visible)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)