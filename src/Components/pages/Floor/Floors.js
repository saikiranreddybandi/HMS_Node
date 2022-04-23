import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';  
import { connect } from 'react-redux';
import AlertDialog from '../DialogBox/AlertDialog';
import ComponentDialog from '../DialogBox/ComponentDialog';
import AddFloor from './AddFloor';
import{getFloorsList,deleteFloorById,deleteUsers,nullifyService} from '../../actions/homeActions'
import { Link } from 'react-router-dom';
const FloorsList =(props) => {
    const[showDialog,setShowDialog]=useState(false);
    const[dialogTitle,setDialogTitle]=useState('');  
    const[showAlertDialog,setShowAlertDialog]=useState(false);
    const[responseMsg,setresponseMsg]=useState('');
    const[responseStatus,setresponseStatus]=useState('');
    useEffect(() => {  
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const editFloor=(data)=>{
   console.log(data)
   setShowDialog(true)
   setDialogTitle('Edit Floor')
    }
    const deleteFloor=(data)=>{
        console.log(data)
props.deleteFloorById(data.room_id)

    }
    const onHide=()=>{
        setShowDialog(false); 
        setShowAlertDialog(false)
    }
const actionTemplate=(rowData)=>{
    return(
        <div>
        <a href='javascript:void(0)' className='ml-2' onClick={()=>editFloor(rowData)}>Edit</a>
        <a href='javascript:void(0)'  className='ml-2'onClick={()=>deleteFloor(rowData)}>Delete</a></div>
    )
}
const  createUser=()=>{ 
    setShowDialog(true);
    setDialogTitle('Create Floor')
}
useEffect(()=>{
    props.getFloorsList();
},[]);
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
const imageBodyTemplate = (rowData) => {
    return <Link to={`/rooms/${rowData.room_id}`}>{rowData.floorName}</Link>;
}

    return (
        <div className='container '> 
         {console.log(props.getfloorDetails)}
            <div className="m-4 pt-3">
                <div className=''>
                <button className="btn btn-primary " onClick={createUser}> Add Floor</button> 
                </div>
            <div>
                <DataTable value={props.getfloorDetails}>
                    <Column body={imageBodyTemplate} header="Floor Name"></Column>  
                    <Column field="roomsCount" header="Rooms Count"></Column>   
                    <Column body={actionTemplate}  header="action"></Column>
                </DataTable>
                </div>
            </div>
            {showDialog &&<ComponentDialog
            isVisible={showDialog}
            DialogBody={AddFloor}
            onHide={onHide}
            header={dialogTitle}
            /> }
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
    getfloorDetails:state.reducers.getfloorDetails,
    addUserStatus:state.reducers.addUserStatus,
    addUserMsg:state.reducers.addUserMsg,
})
const mapDispatchToProps=dispach=>({
    getFloorsList:()=>dispach (getFloorsList()),
    deleteFloorById:(id)=>dispach(deleteFloorById(id)),
    nullifyService:()=>dispach(nullifyService())
})
export default connect(mapStateToProps,mapDispatchToProps)(FloorsList);
 