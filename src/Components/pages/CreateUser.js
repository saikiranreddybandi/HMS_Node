import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import {addAndUpdateUsers} from '../actions/homeActions'
const CreateUser=(props)=>{ 
  const [userName,setUserName]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [userType,setUserType]=useState('')
  const [email,setEmail]=useState('')
  const [phno,setPhoneNo]=useState('')
  const isLoading = useSelector((state) => state.reducers.isLoading) 
 useEffect(()=>{
   console.log("io",props.geteditUserDetails) 
// setUser(props.geteditUserDetails)
if(props.geteditUserDetails&&props.geteditUserDetails.userName){
  setUserName(props.geteditUserDetails.userName);
  setFirstName(props.geteditUserDetails.firstName);
  setLastName(props.geteditUserDetails.lastName);
  setUserType(props.geteditUserDetails.user_type);
  setEmail(props.geteditUserDetails.email);
  setPhoneNo(props.geteditUserDetails.phno);
}
// setUserName(props.geteditUserDetails.userName)
 },[props.geteditUserDetails])
 const changeUserNameHandler=(e)=>{
  setUserName(e.target.value)
 }
 const changeFirstNameHandler=(e)=>{
  setFirstName(e.target.value)

}
const changeLastNameHandler=(e)=>{
  setLastName(e.target.value)
}
const changeUserTypeHandler=(e)=>{
  setUserType(Number(e.target.value))
}
const changeEmailHandler=(e)=>{
  setEmail(e.target.value)
}
const changephoneNumberHandler=(e)=>{
  setPhoneNo(e.target.value)
} 
const onSubmitHandler=()=>{ 
  let user={
    userName:userName,
    firstName:firstName,
    lastName:lastName,
    email:email,
    phno:Number(phno),
    user_type:userType
  }
  if(props.geteditUserDetails&&props.geteditUserDetails.userName){
    user.id=props.geteditUserDetails.user_id
    props.addAndUpdateUsers(user,'update');
  }else{
    props.addAndUpdateUsers(user,'create');
  }
 
}
    return(
        <div>
            <div className='row'>
            <div class="form-group col-sm-6">
             <label for="usr">User Name:</label>
              <input type="text" value={userName} onChange={changeUserNameHandler} placeholder='User Name' name='userName' class="form-control"/>
            </div>
          <div class="form-group col-sm-6">
          <label for="usr">First Name:</label>
          <input type="text" name='fname' onChange={changeFirstNameHandler} value={firstName} placeholder='First Name' class="form-control"/>
          </div>
          </div>
       <div className='row'>
       <div class="form-group col-sm-6">
       <label for="usr">Last Name:</label>
       <input type="text" name='lName' onChange={changeLastNameHandler} value={lastName} placeholder='Last Name' class="form-control"/>
      </div>
     <div class="form-group col-sm-6">
       <label for="sel1">User Type:</label>
       <select class="form-control" onChange={changeUserTypeHandler} value={userType}>
       <option>select User</option>
      <option value='1'>Admin</option>
      <option value='2'>Accountant</option> 
     </select>
     </div>
    </div> 
   <div className='row'>
       <div class="form-group col-sm-6">
     <label for="usr">Email:</label>
     <input type="text" name='email' onChange={changeEmailHandler} value={email} placeholder='Email' class="form-control"/>
   </div>
   <div class="form-group col-sm-6">
   <label for="usr">Phone Number:</label>
   <input type="number" name='phno' onChange={changephoneNumberHandler} value={phno} placeholder='Phone Number' class="form-control"/>
   </div>
   </div> 
   <div className='float-right'>
   <button type='btn' className='btn btn-danger mr-2' onClick={props.onHide}>Cancel</button>
    <button type='submit' className='btn btn-primary' onClick={onSubmitHandler}>{isLoading?<><span class="spinner-border spinner-border-sm"></span>
  Loading..</>:'Submit'}</button>
   </div>
  </div> 
    );
}
const mapStateToProps=(state)=>({
  geteditUserDetails:state.reducers.geteditUserDetails,
})
const mapDispatchToProps=(dispatch)=>({
  addAndUpdateUsers:(data,type)=>dispatch(addAndUpdateUsers(data,type)),
})
export default connect(mapStateToProps,mapDispatchToProps) (CreateUser);