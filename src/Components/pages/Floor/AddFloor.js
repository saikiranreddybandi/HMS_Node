import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {AddorUpdateFloor} from '../../actions/homeActions';
const AddFloor=(props)=>{
  const [floorName,setFloorName]=useState('')
  const [roomCount,setRoomCount]=useState(0)
 
 const changeFloorNameHandler=(e)=>{
setFloorName(e.target.value)
 }
 const changeRoomsCountHandler=(e)=>{
  setRoomCount(e.target.value)
   }
const onSubmitHandler=()=>{ 
    console.log(floorName)
    const data={
      floorName:floorName,
      roomsCount:Number(roomCount)
    }
    props.AddorUpdateFloor(data)
}
    return(
        <div>
            <div className=''>
            <div class="form-group">
             <label for="usr">Floor Name:</label>
              <input type="text" value={floorName} onChange={changeFloorNameHandler} placeholder='Floor Name' name='floorName' class="form-control"/>
            </div>
            <div class="form-group">
             <label for="usr">Rooms Count:</label>
              <input type="text" value={roomCount} onChange={changeRoomsCountHandler} placeholder='Rooms Count' name='roomsCount' class="form-control"/>
            </div>
          </div> 
   <div className='float-right'>
   <button type='btn' className='btn btn-danger mr-2' onClick={props.onHide}>Cancel</button>
    <button type='submit' className='btn btn-primary' onClick={()=>onSubmitHandler()}>Submit</button>
   </div>
  </div> 
    );
}
const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({
    AddorUpdateFloor:(data)=>dispatch(AddorUpdateFloor(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddFloor);