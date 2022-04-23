module.exports=(sequelize,Sequealize)=>{
    const RoomsModel=sequelize.define('rooms',{
        RoomName:{type:Sequealize.STRING,allowNull:false},
        beadsCount:{type:Sequealize.BIGINT,allowNull:false},
        floorId:{type:Sequealize.BIGINT,allowNull:false},
        id:{
      
            // Sequelize module has INTEGER Data_Type.
            type:Sequealize.INTEGER,
      
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },    floorId: {
            type: Sequealize.INTEGER,
            foreignKey: true,
        },
         // Timestamps
         createdAt: Sequealize.DATE,
         updatedAt: Sequealize.DATE,
    })
    return RoomsModel;
}