
export default (expenses)=>{
    if(expenses.lenght ===0){
        return 0
    }else{
        return expenses.map((expense)=>expense.amount).reduce((sum, value)=> sum + value, 0)
    }

}

