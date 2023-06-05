
const express = require("express");
require("dotenv").config();
const config = require("./configs/db.config");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const app = express();

app.use(bodyParser.json());
 

const db=require("./models");


db.sequelize.sync({force:false})
.then(()=>{
    console.log("DB synced");
})

//imported category routes
require("./Routes/category.routes")(app);

//import product routes
require("./Routes/product.routes")(app);

app.listen(process.env.PORT,()=>{
    console.log(`Application is running on port ${process.env.PORT}`);
})