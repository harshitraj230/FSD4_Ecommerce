
const ProductControllers= require("../Controllers/product.controllers");

const {requestValidator} = require("../Middlewares");

module.exports=(app)=>{ 

    app.post("/ecomm/api/v1/products",requestValidator.validateProductRequest,ProductControllers.create);

    app.get("/ecomm/api/v1/products",ProductControllers.findAll);

    app.get("/ecomm/api/v1/products/:id",ProductControllers.findOne);

    //update

    //delete
    app.delete("/ecomm/api/v1/products/:id",ProductControllers.delete);

    //Route for getting a list of products under a particular category
    app.get("/ecomm/api/v1/category/:categoryId/products",requestValidator.validateCategoryPassed,ProductControllers.findProductsUnderCategory);

    //You want product with a productId under a category as categoryId
    app.get("/ecomm/api/v1/category/:categoryId/products/:productId",requestValidator.validateCategoryAndProductPassed,ProductControllers.findProductUnderCategory);
}
