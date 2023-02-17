const ProductModel = require("../../Models/Product.Model");

const getAllProductsController = async (req, res) => {
  try {
    let productsData = await ProductModel.find();
    res.status(201).send(productsData);
  } catch (err) {
    res.status(400).send({
      error: err.message,
      message: "Somthing Went wrong While Getting The Data",
    });
  }
};

const getProductsByID = async(req, res)=> {
  let ID = req.params.id;
  
  try {
    let productsData = await ProductModel.find({_id: ID});
    res.status(201).send(productsData);
  } catch (err) {
    res.status(400).send({
      error: err.message,
      message: "Somthing Went wrong While Getting The Data",
    });
  }
}

module.exports = {getAllProductsController, getProductsByID};
