const { Router } = require("express");
const ProductModel = require("../Models/Product.Model");
const AuthModel = require("../Models/Auth.Model");
const AuthenticatorMiddleware = require("../Middleware/Authenticator.Middleware");

const products = Router();

products.get("/", async (req, res) => {
  try {
    let productsData = await ProductModel.find();
    res.status(201).send(productsData);
  } catch (err) {
    res.status(400).send({
      error: err.message,
      message: "Somthing Went wrong While Getting The Data",
    });
  }
});

products
  .route("/add")
  .post(AuthenticatorMiddleware, async (req, res) => {
    let payload = req.body;
    let seller = req.authID;

    try {
      let isSeller = await AuthModel.findOne({ _id: seller });

      if (!isSeller.isSeller) {
        res.status(400).send({ message: "You are not Authorized" });
      } else {
        let data = await ProductModel.findOne({ name: payload.name });
        if (data) {
          res.status(400).send({ message: "Product Already Exists" });
        } else {
          payload = { ...payload, seller };

          const product = await ProductModel.create(payload);

          if (!product) {
            res.status(400);
            throw new Error();
          }

          res.status(201).json(product);
        }
      }
    } catch (err) {
      res.status(400).send({
        error: err,
        message: "Something Went Wrong While Adding Product",
      });
    }
  });

module.exports = products;
