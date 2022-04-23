import React,{useState} from "react";
function ChangePassword(props) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const changeOldPassword =(e)=>{
setOldPassword(e.target.value)
    }
    const changeNewPassword =(e)=>{
        setNewPassword(e.target.value)
    }
    const changeConfirmPassword =(e)=>{
        setConfirmNewPassword(e.target.value)
    }
return(
    <div>
         <div className=''> 
            <div class="form-group">
             <label >Old Password:</label>
              <input type="text" value={oldPassword} placeholder='New Password'  onChange={changeOldPassword} name='newPassword' class="form-control"/>
            </div>
            <div class="form-group">
             <label>New Password:</label>
              <input type="text"  onChange={changeNewPassword} value={newPassword} placeholder='New Password' name='newPassword' class="form-control"/>
            </div>
            <div class="form-group">
             <label >Confirm New Password:</label>
              <input type="text" onChange={changeConfirmPassword}value={confirmNewPassword} placeholder='Confirm New Password' name='confirmNewPassword' class="form-control"/>
            </div>
          </div>
          <div className='float-right'>
   <button type='btn' className='btn btn-danger mr-2' onClick={props.onHide}>Cancel</button>
    <button type='submit' className='btn btn-primary'>Submit</button>
   </div>
    </div>
)
}
export default ChangePassword;