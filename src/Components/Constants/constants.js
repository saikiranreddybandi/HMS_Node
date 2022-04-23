const url='http://localhost:8888';

const constants={
 header:{ 
        // authorization: 'Bareers',
        "Content-Type": 'application/json', 
        'Origin':'http://localhost:8888'
},
api:{
    siginin:url+'/login',
    //usersList
    getUsersData:url+'/users',
    addUpdateOfUser:url+'/addUser',
    editUser:url+'/editUser',
    deleteUser:url+'/deleteUser',
    signUp:url+'/signup',
    updateUSer:url+'/updateUser',
    //floors List
    getFloorsList:url+'/floorsList',
    createFloor:url+'/createFloor',
    editFloor:url+'/editFloor',
    deleteFloor:url+'/deleteFloor'

}
}
export default constants;