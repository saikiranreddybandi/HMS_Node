import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';  
import store from './store.js';
// import * as serviceWorker 
// ReactDOM.render(<App />, document.getElementById('app'));
render(
   <BrowserRouter> 
   <Provider store={store}> 
       <App/>  
    </Provider>
    </BrowserRouter>,
    
    document.getElementById('root'));
    // serviceWorker.unregister();