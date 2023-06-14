const checkDuplicateEmailOrUserName=(req,res,next)=>{

    const {userName,email}=req.body;
    const checkUserName=user.findOne({
        where:{
            userName:userName
        }
    })
    const checkEmail=user.findOne({
        where:{
            email:email
        }
    })
    Promise.all([checkUserName,checkEmail])
    .then((users)=>{
        if(users[0] || users[1]){
            res.status(400).send({message:"Failed! Username or email is already in use"});
            return;
        }
        next();
    })
    .catch((err)=>{
        res.status(500).send({message:err.message || "Something went wrong"});
    })
}
const verifySignUp={
    checkDuplicateEmailOrUserName
}

module.exports=verifySignUp;