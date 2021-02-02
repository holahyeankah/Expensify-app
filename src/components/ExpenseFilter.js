import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setText} from '../Action/filter';
import {sortByAmount,setStartDate, setEndDate,sortByDate} from '../Action/filter';
import {DateRangePicker} from 'react-dates';


class ExpenseFilter extends Component{
    constructor(props){
        super(props);
        this.state={
            calenderFocus:null
        }
        this.onFocusChange=this.onFocusChange.bind(this)
        this.onDateChange=this.onDateChange.bind(this)
    }
    onDateChange({startDate,endDate}){
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))

    };
    onFocusChange(calenderFocus){
        this.setState(()=>({calenderFocus}))
    }
    render(){
        return(
            <div>
 
    <div className="input-group">
        <div className="input-group-item">
        <input type="text" placeholder="search expenses" value={this.props.filter.text} onChange={(e)=>this.props.dispatch(setText(e.target.value))}/>
        </div>
        <div className="input-group-item">
        <select
         value={this.props.filter.sortBy}
        onChange={(e)=>{
        if(e.target.value==='amount'){
           this.props.dispatch(sortByAmount())
        }else if(e.target.value==='date'){
            this.props.dispatch(sortByDate())
        }
        }}> 
        
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>

        </div>
        <div className="input-group-item">

        <DateRangePicker
        startDate={this.props.filter.startDate}
        endDate={this.props.filter.endDate}
        onDatesChange={this.onDateChange}
        focusedInput={this.state.calenderFocus}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        showClearDates={true}

        />
        </div>
        
     

      
    </div>
    </div>

        )
    }
}

const mapStateToProps=(state)=>{
    
    return{
        filter:state.filters
    }
}


export default connect(mapStateToProps)(ExpenseFilter)