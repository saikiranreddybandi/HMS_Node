// Include Sequelize module.
// const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
// const sequelize = require('..')
  
// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
module.exports=(sequelize,Sequelize)=>{

    const User = sequelize.define('usersList', {
  
        // Column-1, user_id is an object with 
        // properties like type, keys, 
        // validation of column.
        userName: { type: Sequelize.STRING, allowNull:false },
        firstName:{type: Sequelize.STRING, allowNull:false},
        lastName:{type: Sequelize.STRING, allowNull:false},
        phno:{type: Sequelize.BIGINT, allowNull:false},
        email: { type: Sequelize.STRING, allowNull:false },
        user_type: { type: Sequelize.STRING, allowNull:false },
        user_id:{
      
            // Sequelize module has INTEGER Data_Type.
            type:Sequelize.INTEGER,
      
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },  
         // Timestamps
         createdAt: Sequelize.DATE,
         updatedAt: Sequelize.DATE,
    })
return User;
}

  
// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table. 