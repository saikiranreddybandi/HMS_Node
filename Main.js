import React,{Component, Fragment} from 'react'  
import { BrowserRouter as Router, Route, Link ,Redirect, Switch, withRouter} from "react-router-dom";
import Login from './src/Components/Auth/Login';
import { connect } from 'react-redux';
import UsersList from './src/Components/pages/usersList';
import Header from './src/Components/pages/Header/Header';
import Footer from './src/Components/pages/Footer/Footer';
import Resume from './src/Components/pages/Resume/Resume';
import Guest from './src/Components/pages/Guestes/Guest'; 
import FloorsList from './src/Components/pages/Floor/Floors';
import SignUp from './src/Components/Auth/Signup';
import RoomsList from './src/Components/pages/Rooms/Rooms';
   const privateRoute=({component:Component,...rest})=>(
           <Route {...rest} render={props=>(token !==null &&token!==undefined?
               <Component/> :<Redirect exact/>)}/>
   );
 const Main=(props)=>{ 
      
return( 
        <div> 
        <Switch> 
        <Router> 
        {sessionStorage.userName?<Header/>:''}     
           <Route exact  path='/login'  component={Login}/>
           <Route path='/signup'  component={SignUp}/>
           <Route exact path='/users' component={UsersList}/> 
           <Route path='/floors' component={FloorsList}/>
           {/* <Route path='/resume' component={Resume}/> */}
           <Route path='/guests' component={Guest}/>
           <Route exact path='/rooms/:id' component={RoomsList}/>
        </Router>
        </Switch>  
        {sessionStorage.userName? <Footer/>:''} 
        </div>
);
 }
 const mapStateToProps=(state)=>({

 })
 export default connect(mapStateToProps,'')(Main);