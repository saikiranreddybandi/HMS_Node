module.exports=(sequelize,Sequealize)=>{
    const FloorsDetails=sequelize.define('floorsList',{
        floorName:{type:Sequealize.STRING,allowNull:false},
        roomsCount:{type:Sequealize.BIGINT,allowNull:false},
        room_id:{
      
            // Sequelize module has INTEGER Data_Type.
            type:Sequealize.INTEGER,
      
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },  
         // Timestamps
         createdAt: Sequealize.DATE,
         updatedAt: Sequealize.DATE,
    })
    return FloorsDetails;
}