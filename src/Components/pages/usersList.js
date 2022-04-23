import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 
import{getUsersList,editUsers,createUser,nullifyService,deleteUsers} from '../actions/homeActions'
import { connect, useSelector } from 'react-redux';
import ComponentDialog from './DialogBox/ComponentDialog';
import CreateUser from './CreateUser';
import AlertDialog from './DialogBox/AlertDialog';
const UsersList =(props) => {
    const[showDialog,setShowDialog]=useState(false)
    const[editRowData,setEditRowData]=useState('')
    const[dialogTitle,setDialogTitle]=useState('')
    const[showAlertDialog,setShowAlertDialog]=useState(false)
    const[responseMsg,setresponseMsg]=useState('')
    const[responseStatus,setresponseStatus]=useState('')
    const[successBtn,setSuccessBtn]=useState(false)
    const isLoading = useSelector((state) => state.reducers.isLoading) 
    useEffect(() => { 
        props.getUsersList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const editUser=(data)=>{
        props.editUsers(data.user_id) 
        setDialogTitle('Edit User')
        setShowDialog(true) 
    }
    const deleteUser=(data)=>{
        setShowAlertDialog(true)
        setresponseMsg('Are you sure you want to delete User')
        setDialogTitle('Confirm Message')
        setresponseStatus('')
        setEditRowData(data.user_id)

    }
const actionTemplate=(rowData)=>{ 
    return(
        <div>
        <a href='javascript:void(0)' className='ml-2' onClick={()=>editUser(rowData)}>Edit</a>
        <a href='javascript:void(0)'  className='ml-2'onClick={()=>deleteUser(rowData)}>Delete</a></div>
    )
}
const onHide=()=>{
    setShowDialog(false);
    setShowAlertDialog(false)
}
const  createUser=()=>{
    setDialogTitle('Create User')
setShowDialog(true);
props.createUser();
}
useEffect(()=>{ 
if(props.addUserStatus =='success'){
    setShowDialog(false);
    setShowAlertDialog(false)
    setShowAlertDialog(true)
setresponseMsg(props.addUserMsg)
setresponseStatus(props.addUserStatus)
setDialogTitle('Alert Message');
props.nullifyService();
}

},[props.addUserStatus])
 
const successMethod=()=>{ 
  props.deleteUsers(editRowData);
}
useEffect(()=>{
if(props.addUserMsg){
    setShowDialog(false)
    setShowAlertDialog(true)
    setresponseMsg(props.addUserMsg)
    setresponseStatus(props.addUserStatus)
    setDialogTitle('Alert Message');
    props.nullifyService(); 
}
},[props.addUserMsg])
    return (
        <div className='container '> 
         
            <div className="m-4 pt-3">
                <div className='float-right'>
                <button className="btn btn-primary" onClick={createUser}> Add User</button> 
                </div>
            <div className='data-table'>
                <DataTable  value={props.getUsersDetails}>
                    <Column field="userName" header="User Name"></Column>
                    <Column field="firstName" header="First Name"></Column>
                    <Column field="lastName" header="Last Name"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="email" header="Phone Number
                    "></Column>
                    <Column body={actionTemplate} header="action"></Column>
                </DataTable>
                </div>
            </div>
         {showDialog?   <ComponentDialog
            isVisible={showDialog}
            DialogBody={CreateUser}
            onHide={onHide}
            header={dialogTitle}
            />:''}
           {showAlertDialog?<AlertDialog
               isVisible={showAlertDialog} 
               responseMsg={responseMsg}
               responseStatus={responseStatus}
               onHide={onHide}
               isOk={successMethod}
               header={dialogTitle}
               successAlert={dialogTitle ==='Confirm Message'?false:true}
           />:''} 
        </div>
    );
}
const mapStateToProps=state=>({
    getUsersDetails:state.reducers.getUsersDetails,
    addUserStatus:state.reducers.addUserStatus,
    addUserMsg:state.reducers.addUserMsg,
    deleteUserStatus:state.reducers.deleteUserStatus,
    deleteUserMsg:state.reducers.deleteUserMsg
})
const mapDispatchToProps=dispatch=>({
    getUsersList:()=>dispatch(getUsersList()),
    editUsers:(data)=>dispatch(editUsers(data)),
    deleteUsers:(id)=>dispatch(deleteUsers(id)),
    createUser:()=>dispatch(createUser()),
    nullifyService:()=>dispatch(nullifyService())
})
export default connect(mapStateToProps,mapDispatchToProps)(UsersList);
 