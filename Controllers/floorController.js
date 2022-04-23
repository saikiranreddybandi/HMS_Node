const db = require('../config/dbConfig');
const floorListDb = db.FloorsList;

exports.getFloorsList=(req,res)=>{ 
    try{ 
floorListDb.findAll()   
.then(result=>{
    res.status(200).json({message:'get all floors list info successfully',status:'success',floorsList:result})
})
. catch(error => {
    // log on console
    console.log(error);
  
    res.status(500).json({
        message: "Error!",
        error: error
    });
  });
    }
    catch(error){
        return res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    
    }

}
exports.createFloor=(req,res)=>{
    let floorList={}
    try{
        console.log(req.body)
floorList.floorName=req.body.floorName,
floorList.roomsCount=req.body.roomsCount,
floorListDb.create(floorList)
.then(result=>{
    return res.status(200).json({
        message:'floor added succussfully',
        status:'success'
    })
})
    }
    catch(error){
return res.status(401).json({
    message:error,
    status:'error'

})
    }
}
//delete floor
exports.deleteFloor= async(req,res)=>{
    try{
let ids=req.params.id
if(ids){
    let mode=await floorListDb.findByPk(ids);
    console.log(ids)
    if(!mode){
        return res.status(404).json({
            message: "Does Not exist a floor with id = " + ids,
            error: "error",
        })
    }else{
        await mode.destroy();
        return res.status(200).json({
            message:'deleted succussfully',
            status:'success '
        })
    }
}
    }catch(err){
        return res.status(500).json({
            message:'can not delete floor. some error '
        })
    }
}

//edit floor
exports.editFloorID = (req, res) => {
    // find all Customer information from 
    let ids = req.params.id;
    floorListDb.findByPk(ids)
        .then(customer => {
            res.status(200).json({
                message: " Successfully Get a floor with id = " + ids,
                user: customer
            });
        })
        . catch(error => {
          // log on console
          console.log(error);
  
          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
  }