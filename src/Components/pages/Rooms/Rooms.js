import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';  
import { connect } from 'react-redux';
export  default function RoomsList (props)  {
    const [products, setProducts] = useState([
        {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
        {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
        {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
    ]); 

    useEffect(() => {  
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const editUser=(data)=>{
   console.log(data)
    }
    const deleteUser=(data)=>{
console.log(data)
    }
// const actionTemplate=(rowData)=>{
//     console.log("ppp",rowData)
//     return(
//         <div>
//         <a href='javascript:void(0)' className='ml-2' onClick={()=>editUser(rowData)}>Edit</a>
//         <a href='javascript:void(0)'  className='ml-2'onClick={()=>deleteUser(rowData)}>Delete</a></div>
//     )
// }
const  createUser=()=>{
    alert()
}
    return (
        <div className='container '> 
         
            <div className="m-4 pt-3">
                <div className=''>
                <button className="btn btn-primary " onClick={createUser}> Add Room</button> 
                </div>
            <div>
                <DataTable value={products}>
                    <Column field="userName" header="User Name"></Column>
                    <Column field="firstName" header="First Name"></Column>
                    <Column field="lastName" header="Last Name"></Column>
                    <Column field="email" header="Email"></Column>
                    {/* <Column body={actionTemplate} header="action"></Column>      */}
                </DataTable>
                </div>
            </div>
        </div>
    );
} 
