const CartModel = require("../../Models/Cart.Model");

const getCartController = async (req, res) => {
  const user = req.authID;

  try {
    const cart = await CartModel.find({ user }).populate("product").select();

    if (cart.length < 1) {
      res.status(404).send({ message: "Cart Is Empty" });
    } else {
      res.status(200).send(cart);
    }
  } catch (error) {
    res
      .status(500)
      .send({
        message: "Something Went Wrong While Getting Cart Data",
        error: error.message,
      });
  }
};

module.exports = getCartController;
