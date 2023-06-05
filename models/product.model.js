

module.exports = (Sequalize,sequelize)=>{

    const Product = sequelize.define("product",{
        id:{
            type:Sequalize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequalize.STRING,
            allowNull:false
        },
        description:{
            type:Sequalize.STRING
        },
        cost:{
            type:Sequalize.INTEGER,
            allowNull:false
        },
        categoryId:{
            type:Sequalize.INTEGER
        }
    },{
        tableName:'products'
    });

    return Product;
}