const { Router } = require("express");
const ProductModel = require("../Models/Product.Model");
const AddProductAuthMiddleware = require("../Middleware/AddProductAuth.Middleware");

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

products.route("/add").post(AddProductAuthMiddleware, async (req, res) => {
  let payload = req.body;
  try {
    let data = await ProductModel.findOne({ name: payload.name });
    if (data) {
      res.status(400).send({ message: "Product Already Exists" });
    } else {
      // await ProductModel.create(payload);
      res
        .status(201)
        .send({ message: "Product Successfully Added", data: payload });
    }
  } catch (err) {
    res.status(400).send({
      error: err.message,
      message: "Something Went Wrong While Adding Product",
    });
  }
});

module.exports = products;
