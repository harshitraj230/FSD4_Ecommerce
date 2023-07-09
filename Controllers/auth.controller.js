const {User, Role, Sequelize, ROLES} = require("../models");
const bcrypt = require("bcryptjs");
exports.signup= async (req,res)=>{
    var {userName,email,password,roles}=req.body;
    if(!roles || !roles.length){
        roles=[ROLES[0]];
    }
    try{
    const user = await User.create({userName,email,password:bcrypt.hashSync(password,8)});
    const userRoles = await Role.findAll({where:{name:{[Sequelize.Op.or] : roles}}});
    await user.setRoles(userRoles);
    res.send({message:"User registered successfully"});
    }catch(e){
        res.status(500).send({message: e.message || "Something went wrong"});
    }
}
exports.signIn = async (req,res) =>{
    const {username,password}= req.body;
    if(!username || !password){
        req.status(400).send({message:"UserName or Password cannot be empty"});
    }
    try{
    var user = await User.findOne({where:{username:username}});
    }catch(e){
        return res.status(500).send({message:e.message});
    }

    if(!user){
        return res.status(400).send({message:"user not found"});
    }
    
    var isPasswordValid= bcrypt.compareSync(password,user.password);

    if(!isPasswordValid){
        return res.status(401).send({message:"Invalid Password"});
    } 
        res.send({id:user.id,
            userName:user.userName,
            email:user.email,
            roles:user.roles
        })
}