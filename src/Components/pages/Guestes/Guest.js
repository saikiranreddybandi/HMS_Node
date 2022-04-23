import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';     
const Guest=(props)=>{
    const actionTemplate=(rowData)=>{ 
        return(
            <div>
            <a href='javascript:void(0)' className='ml-2' onClick={()=>editUser(rowData)}>Edit</a>
            <a href='javascript:void(0)'  className='ml-2'onClick={()=>deleteUser(rowData)}>Delete</a></div>
        )
    }
return(
    <div className='container '> 
         
            <div className="m-4 pt-3">
                <div className=''>
                <button className="btn btn-primary " > Add Guest</button> 
                </div>
            <div>
                <DataTable value={props.getUsersDetails}>
                    <Column field="userName" header="Name"></Column>
                    <Column field="firstName" header="Room No"></Column>
                    <Column field="lastName" header="Phone No"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column body={actionTemplate} header="action"></Column>
                </DataTable>
                </div>
            </div> 
        </div>
)
}
export default Guest;