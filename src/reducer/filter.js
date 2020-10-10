import moment from 'moment';


const filterArray={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}

export default (state=filterArray, action)=>{
      switch(action.type){
      case 'SET_TEXT':
       return{
         ...state,
             text:action.text
            }
            case 'SET_AMOUNT':
                return{
               ...state,
                sortBy:'amount'
                }
             case 'SET_DATE':
           return{
         ...state,
     sortBy:'date'
         }
     case 'START_DATE':
      return{
       ...state,
       startDate:action.date
        }
        case 'END_DATE':
          return{
               ...state,
    endDate:action.end
                }
    default:
     return state
    }
}