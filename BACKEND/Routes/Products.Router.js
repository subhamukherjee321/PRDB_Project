const { Router } = require("express");
const AuthenticatorMiddleware = require("../Middleware/Authenticator.Middleware");
const {
  getAllProductsController,
  getProductsByID,
} = require("../Controllers/Product/Products.Get.Controller");
const addProductsController = require("../Controllers/Product/Products.Add.Controller");

const products = Router();

products.route("/:id").get(getProductsByID);

products.route("/").get(getAllProductsController);

products.route("/add").post(AuthenticatorMiddleware, addProductsController);

module.exports = products;
