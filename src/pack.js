import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRoutes from './routers/AppRoutes';
import {Provider} from 'react-redux';
import './components/style.scss';


const store=configureStore();


store.subscribe(()=>{

    const state=store.getState();
   
    console.log(state) 
    
})

const jsx=(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))