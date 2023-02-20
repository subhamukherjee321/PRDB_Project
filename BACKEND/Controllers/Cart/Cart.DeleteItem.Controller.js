const CartModel = require("../../Models/Cart.Model");

const deleteItemCart = async (req, res) => {
  const productID = req.params.id;
  const user = req.authID;

  try {
    const isProduct = await CartModel.findOne({ product: productID, user });

    if (!isProduct) {
      return res.status(404).send({ message: "Product Not Found At Cart" });
    } else {
      await CartModel.findByIdAndDelete({ _id: isProduct._id });
      res.status(200).send({ message: "Product Is Removed From The Cart" });
    }
  } catch (err) {
    res
      .status(500)
      .send({
        message: "Something Went Wrong While Deleteing Cart Item",
        error: err.message,
      });
  }
};

module.exports = deleteItemCart;