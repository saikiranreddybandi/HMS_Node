const env=require('./env.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.SignUp = require('../Models/users.js')(sequelize, Sequelize);
db.FloorsList=require('../Models/FloorsList')(sequelize, Sequelize);
db.Rooms=require('../Models/Rooms')(sequelize, Sequelize)
db.FloorsList.hasMany(db.Rooms,{as:'Rooms'});
db.Rooms.belongsTo(db.FloorsList, {
  foreignKey: "floorId",
  as: "floors",
})
module.exports = db;