
const expenseArray=[]
export default (state=expenseArray, action)=>{
    console.log(state)
    switch(action.type){
        case 'ADD_EXPENSE':
           return state.concat(action.expense)
         
        case 'REMOVE_EXPENSE':

        return state.filter(({id})=>id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates

                    };
                }else{
                    return expense
                }
                

            }))
              
                   

        default:
            return state
    }
}
