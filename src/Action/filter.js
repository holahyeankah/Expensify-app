export const setText=(text='')=>({
    type:'SET_TEXT',
    text
})

export const sortByAmount=()=>({
    type:'SET_AMOUNT',
   
})

export const sortByDate=()=>({
    type:'SET_DATE',
   
})
export const setStartDate=(date)=>({
    type:'START_DATE',
    date
   
})
export const setEndDate=(end)=>({
    type:'END_DATE',
    end
   
})