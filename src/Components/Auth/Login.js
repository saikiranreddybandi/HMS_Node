import React,{Component} from 'react'; 
import {reduxForm} from 'redux-form'
import { ProgressSpinner } from 'primereact/progressspinner'; 
import { connect } from 'react-redux';
import {loginRequest } from '../actions/homeActions'
import { withRouter } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:''
        }
    }
    componentDidMount(){ 
        sessionStorage.userName=''
    }
    changeUserNameHandler=(event)=>{ 
        this.setState({userName:event.target.value})
    }
    changePasswordHandler=(event)=>{ 
        this.setState({password:event.target.value})
    }
    sendValue=(e)=>{  
        let obj={
            userName:this.state.userName,
            password:this.state.password
        }
    this.props.loginRequest(obj);
    }
    render(){ 
        const{handleSubmit}=this.props;
        const{userName,password}=this.state;
        return(
            <div className='container loginDiv m-0'>
                <div className="card p-4 m-auto w-50 login-div">
            <form onSubmit={this.props.handleSubmit(this.sendValue)}>
                {/* <div><img src='images/home1.jpeg'/></div> */}
                   <h3 className='text-center'>Sign In</h3> 
                   <div className="form-group">
                       <label >User Name</label>
                       <input type="text" placeholder='User Name' name='username' value={userName} onChange={(e)=>this.changeUserNameHandler(e)} className="form-control" placeholder="Enter User Name" />
                   </div>
   
                   <div className="form-group">
                       <label>Password</label>
                       <input type="password" placeholder='Password'name='password' value={password} onChange={(e)=>this.changePasswordHandler(e)} className="form-control" placeholder="Enter password" />
                   </div> 
                   <button type="submit" className="btn btn-primary d-block float-right"  >Submit</button>
               
               </form>
               </div>
               </div>
        )
    }
}
Login=reduxForm({
form:'loginApp'
})(Login);
const mapStateToProps=state=>({

})
const mapDispatchToProps=dispach=>({
    loginRequest:(payload)=>dispach(loginRequest(payload))
})
Login=connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))
export default Login;