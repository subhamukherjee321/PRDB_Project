const ProductModel = require("../../Models/Product.Model");

const addProductsController = async (req, res) => {
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
        await ProductModel.create(payload);
        res
          .status(201)
          .json({ status: "Success", message: "Product Added Successfully" });
      }
    }
  } catch (err) {
    res.status(400).send({
      error: err,
      message: "Something Went Wrong While Adding Product",
    });
  }
};

module.exports = addProductsController;
