import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import ComponentDialog from '../DialogBox/ComponentDialog';
import ChangePassword from './ChangePassword';
function Header(){
  const [showDialog, setShowDialog] = useState(false)
  const [headerText, setHeaderText] = useState('')
  const changePassword=()=>{
  setShowDialog(true)
  setHeaderText('Change Password')
  }
  const onHide=()=>{
    setShowDialog(false)
  }

return(
    <div>
    <header>
        <nav className="navbar navbar-expand-md navbar-dark  header">
        <div><img src='images/home1.jpeg' width='40px' height='40px'/><a href="" className="navbar-brand">Hostel Management System</a></div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink className="nav-link" to="/users">Users <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
          <NavLink className="nav-link" to='/floors'>Rooms</NavLink> 
      </li>
      <li class="nav-item">
          <NavLink className="nav-link" to='/guests'>Gustes</NavLink> 
      </li> 
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">icon</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="javascript:void(0)">{sessionStorage.userName}</a>
        <a class="dropdown-item" onClick={changePassword} href="javascript:void(0)">Change Password</a>
        <a class="dropdown-item" href="javascript:void(0)">Log out</a></div>
    </li>
    </ul> 
  </div>
        </nav>
    </header>
   {showDialog?<ComponentDialog
      isVisible={showDialog}
      DialogBody={ChangePassword}
      onHide={onHide}
      header={headerText}
   />:''} 
</div>
)
}
export default Header;