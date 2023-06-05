
const ProductControllers= require("../Controllers/product.controllers")

module.exports=(app)=>{ 

    app.post("/ecomm/api/v1/product",ProductControllers.create);

    app.get("/ecomm/api/v1/product",ProductControllers.findAll);

    app.get("/ecomm/api/v1/product/:id",ProductControllers.findOne);

}