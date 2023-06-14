const { sequelize, Sequelize } = require(".");

module.exports = (Sequelize,sequelize)=>{
    const user=sequelize.define("users",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });
    return user;
}