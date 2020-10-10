import {addExpense, removeExpense, editExpense} from '../../Action/expense'

test('show remove',()=>{
    const action=removeExpense({id:'12'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'12'
    })
})

test('show edit',()=>{
    const action=editExpense('13', {note:'i love you'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'13',
        updates:{
            note:'i love you'
        }
    })
});

test('add expense', ()=>{
    const expenseData={
        description:'men are good',
     notes:'i love book',
        amount:2500,
        createdAt:2400

    };

    const action=addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id:expect.any(String)
        }
    })
})
test('add expense', ()=>{
  

    const action=addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
                description:'',
                notes:'',
                amount:0,
                createdAt:0
        
            
       
        }
    })
})