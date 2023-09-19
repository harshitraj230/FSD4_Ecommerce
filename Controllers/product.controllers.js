const {Product,Category,Sequelize} = require("../models");
const Op=Sequelize.Op;
exports.create=(req,res)=>{
    if(!req.isAdmin){
        return res.status(403).send({message:"OOPS! you are unauthorized to perform this task"});
    }
    const {name,description,cost,categoryId}=req.body;
    const product = {name,description,cost,categoryId};
    Product.create(product).then(product=>{
        res.status(201).send(product);
    })
    .catch((err)=>{
        res.status(500).send({message:err.message || "Something went wrong"});
    })
}
exports.findAll=(req,res)=>{
    const {name,minCost,maxCost}=req.query;
    console.log(req.query);
    if(name){
        productsPromise=Product.findAll({
            where:{
                name:name
            }
        })
    }
    else if(minCost && maxCost){
        productsPromise=Product.findAll({
            where:{
                cost:{
                    [Op.gte]:minCost,
                    [Op.lte]:maxCost
                }
            }
        })
    }
    else if(minCost){
        productsPromise=Product.findAll({
            where:{
                cost:{
                    [Op.gte]:minCost
                }
            }
        })
    }
    else if(maxCost){
        productsPromise=Product.findAll({
            where:{
                cost:{
                    [Op.lte]:maxCost
                }
            }
        })
    }
    else{
        productsPromise=Product.findAll()
    } 
    productsPromise
    .then(products=>{
        res.send(products)
    })
    .catch((err)=>{
        res.status(500).send({message:err.message || "Something went wrong"});
    })
}
exports.findOne=(req,res)=>{
    const productId=req.params.id;
    Product.findByPk(productId)
    .then(product=>{
        if(!product){
            res.status(404).send({message:"Product not found"});
        }
        res.send(product)
    })
    .catch((err)=>{
        res.status(500).send({message:err.message || "Something went wrong"});
    })
}
exports.findProductsUnderCategory=(req,res)=>{
        Product.findAll({
            where:{
                categoryId:req.params.categoryId
            }
        })
        .then(products=>{
            res.send(products);
        })
        .catch((err)=>{
            res.status(500).send({message:"Something went wrong while getting products for given category id"});
        })
}
exports.findProductUnderCategory=(req,res)=>{
    Product.findAll({
        where:{
            categoryId:req.params.categoryId,
            id:req.params.productId
        }
    })
    .then(product=>{
        res.send(product);
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went wrong while getting products for given category id"});
    })
}
exports.delete=(req,res)=>{
    const productId=req.params.id;
    Product.destroy({
        where:{
            id:productId
        }
    })
    .then((data)=>{
        res.send({message:"Successfully deleted the product"});
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went wrong"});
    })
}