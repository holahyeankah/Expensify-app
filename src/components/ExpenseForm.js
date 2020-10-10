import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'



class ExpenseForm extends Component{
    constructor(props){
        super(props)
       this.state= {
            description:props.expense ? props.expense.description :'',
            notes: props.expense ? props.expense.notes :"",
            amount:props.expense? (props.expense.amount/100).toString(): "",
            createdAt:props.expense ? moment(props.expense.createdAt) :moment(),
            calenderFocus:false,
            error:''
        };
        this.onFocusChange=this.onFocusChange.bind(this);
        this.onDateChange=this.onDateChange.bind(this);
        this.onDescriptionChange=this.onDescriptionChange.bind(this);
        this.onNoteChange=this.onNoteChange.bind(this);
        this.onAmountChange=this.onAmountChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    };

    onFocusChange({focused}){
        this.setState(()=>({calenderFocus:focused})

        )}

onDateChange(createdAt){
   if(createdAt){
    this.setState(()=>({createdAt}))

   }
}
    onDescriptionChange(e){
        const description=e.target.value
        this.setState(()=>({description}))

    }

    onNoteChange(e){
        const notes=e.target.value
        this.setState(()=>({notes}))

    }
    onAmountChange(e){
        const amount=e.target.value;
            this.setState(()=>({amount}))

    }
    onSubmit(e){
        e.preventDefault();
    if(!(this.state.description && this.state.amount)){
        this.setState(()=>({error:'please enter a valid input'}))
    }else{
    
        this.setState(()=>({error:''}))
        this.props.onSubmit({
            description:this.state.description,
            notes:this.state.notes,
            amount:parseFloat(this.state.amount, 10) *100,
            createdAt:this.state.createdAt.valueOf()
        })
    }

    }
    render(){
        return(
            <div>
               {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
                <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocus}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                />
                <textarea
                 placeholder="Add expense note (optional)" value={this.state.notes}
                 onChange={this.onNoteChange}
                > 
                </textarea>
                <button>Add expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm