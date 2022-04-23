const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
}; 
const User=require('./Models/users')

const db = require("./config/dbConfig");
db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and Resync with { force: false }');
}); 
    
// Force sync all models 
// It will drop the table first  
// and re-create it afterwards 
// set port, listen for requests
// simple route
let router = require('./routes/admin.js'); 
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");  
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
})
app.use('/',router)
const PORT =8888

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});