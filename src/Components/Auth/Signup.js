import React,{useState} from "react"; 
import {signUpUsers} from '../actions/homeActions'
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';
function SignUp(props) {
    const [userName,setuserName]=useState('')
const [firstName,setfirstName]=useState('')
const [lastName,setlastName]=useState('')
const [secretKey,setsecretKey]=useState('')
const [email,setemail]=useState('')
const [phno,setphno]=useState('') 
const sendValue=(e)=>{
    e.preventDefault();
    const data={
        userName:userName,
        firstName:firstName,
        lastName:lastName,
        email:email,
        phno:Number(phno),
        secretKey:secretKey,
        user_type:'1'
    } 
props.signUpUsers(data)
}
const handleUser=(e)=>{ 
    const  {name,value} =e.target; 
if(name==='userName'){
    setuserName(value)
}else if(name==='firstName'){
setfirstName(value)
}else if(name==='lastName'){
    setlastName(value)
}else if(name ==='email'){
    setemail(value)
}else if(name=='phno'){
    setphno(value)
}else if(name==='secretKey'){
    setsecretKey(value)
} 
  

}
    return ( 
        <div className='container loginDiv m-0'>
        <div className="card p-4 m-auto w-75 login-div signupdiv">
    <form onSubmit={sendValue}>
        {/* <div><img src='images/home1.jpeg'/></div> */}
           <h3 className='text-center'>SignUp</h3> 
           <div className="row">
           <div className="form-group col-sm-6">
               <label >User Name<sup className="text-danger">*</sup> :</label>
               <input type="text" name='userName' onChange={handleUser} value={userName}  className="form-control" placeholder="Enter User Name" />
           </div>
           <div className="form-group col-sm-6">
               <label >First Name<sup className="text-danger">*</sup> :</label>
               <input type="text"  name='firstName'  onChange={handleUser} value={firstName} className="form-control" placeholder="Enter First Name" />
           </div>
           <div className="form-group col-sm-6">
               <label >Last Name<sup className="text-danger">*</sup> :</label>
               <input type="text"  name='lastName'  onChange={handleUser} value={lastName}  className="form-control" placeholder="Enter Last Name" />
           </div>
           <div className="form-group col-sm-6">
               <label >Email<sup className="text-danger">*</sup> : </label>
               <input type="text" name='email'  onChange={handleUser} value={email}  className="form-control" placeholder="Enter Email" />
           </div>
           <div className="form-group col-sm-6">
               <label >Phone No<sup className="text-danger">*</sup> :</label>
               <input type="number"  name='phno'  onChange={handleUser} value={phno} className="form-control" placeholder="Enter Phone Number" />
           </div>
           <div className="form-group col-sm-6">
               <label >Secret Key<sup className="text-danger">*</sup> :</label>
               <input type="text"  onChange={handleUser} value={secretKey} name='secretKey' encrypted='U2FsdGVkX18tjlwgGfjfNgXuVnqrfMRd5myTPe4+ezw=
'  className="form-control" placeholder="Enter Secret Key" />
           </div>
           </div> 
           <button type="submit" className="btn btn-primary d-block float-right"  >Submit</button>
       
       </form>
       </div>
       </div>
     );
}
const mapDispatchToProps=dispach=>({
    signUpUsers:(payload)=>dispach(signUpUsers(payload))
})
SignUp=connect('',mapDispatchToProps)(withRouter(SignUp))
export default SignUp;