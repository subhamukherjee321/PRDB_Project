const { Router } = require("express");

const addToCartController = require("../Controllers/Cart/Cart.Add.Controller");
const deleteItemCart = require("../Controllers/Cart/Cart.DeleteItem.Controller");
const getCartController = require("../Controllers/Cart/Cart.Get.Crontroller");
const quantityDecCart = require("../Controllers/Cart/Cart.QuantityDecreament");
const authenticator = require("../Middleware/Authenticator.Middleware");

const cart = Router();

cart.route("/").get(authenticator,getCartController);
cart.route("/add-to-cart/:id").post(authenticator,addToCartController);
cart.route("/quantity-decreament/:id").patch(authenticator, quantityDecCart);
cart.route("/delete-item/:id").delete(authenticator, deleteItemCart);

module.exports = cart;