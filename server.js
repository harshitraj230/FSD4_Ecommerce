
const express = require("express");
require("dotenv").config();
const config = require("./configs/db.config");
const bodyParser = require("body-parser");
const {authJWT} = require("./Middlewares");
const Sequelize = require("sequelize");
const app = express();

app.use(bodyParser.json());
 

const db=require("./models");


db.sequelize.sync({force:false})
.then(()=>{
    console.log("DB synced");
})

/**
 * Add roles
 */

// db.Role.create({
//     id:1,
//     name:"user"
// });

// db.Role.create({
//     id:2,
//     name:"admin"
// })

//import Auth routes
require("./Routes/auth.routes")(app);

app.use(authJWT.verifyToken);

//imported category routes
require("./Routes/category.routes")(app);

//import product routes
require("./Routes/product.routes")(app);


//import User routes
require("./Routes/user.routes")(app);

app.listen(process.env.PORT,()=>{
    console.log(`Application is running on port ${process.env.PORT}`);
})