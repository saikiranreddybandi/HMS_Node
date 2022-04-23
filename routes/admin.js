  const express=require('express');  
    const signupController=require('../Controllers/signUpController');
    const floorList=require('../Controllers/floorController');
const { getRoomsList,createRoomController } = require('../Controllers/RoomsController');
    let router=express.Router();
    
    
    router.post('/signup',signupController.sendUserSignupForm);
    router.post('/addUser',signupController.sendUserSignupForm)
    router.get('/users',signupController.usersList),
    router.get('/deleteUser/:id',signupController.deleteById)
    router.get('/editUser/:id',signupController.editUserID);
    router.post('/updateUser',signupController.updateUser)

    //floors list
    router.get('/floorsList',floorList.getFloorsList);
    router.post('/createFloor',floorList.createFloor)
    router.get('/deleteFloor/:id',floorList.deleteFloor);
    router.get('/editFloor/:id',floorList.editFloorID);
    //rooms
    router.get('/getAllRoomsById/:id',getRoomsList)
    router.post('createRoom',createRoomController)
 
 module.exports=router;