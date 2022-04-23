import React, { Component } from 'react';  
import ReactDom from 'react-dom'
import Main from './main'; 
import { BrowserRouter, Route, Link,Redirect, withRouter } from "react-router-dom"; 
import './hms.css' 
class App extends Component{
   render(){
      return( 
         <Main/> 
      );
   }
}
export default App;