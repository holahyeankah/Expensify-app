import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducer/expense';
import filterReducer from '../reducer/filter';

export default()=>{
    const store=createStore(combineReducers({
        expenses:expenseReducer,
        filters:filterReducer


}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

return store
}