
const env = {
    host: 'localhost',
    database: 'hms_01',
    username: 'postgres',
    password: '123456789', 
    dialect: 'postgres', 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;