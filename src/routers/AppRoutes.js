import React from 'react'
import {BrowserRouter, Route, Switch,} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Login from '../components/Login'
import EditExpensePage from '../components/EditExpensePage';


const AppRoutes=()=>{
    return(
        
            <BrowserRouter>
         
            <div>
            <Header/>
            <Switch>
                <Route path='/' component={Login} exact={true}/>
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route  component={NotFoundPage}/>


            </Switch>
            
            </div>
            </BrowserRouter>
        
    )

}

export default AppRoutes