const CartModel = require("../../Models/Cart.Model");
const ProductModel = require("../../Models/Product.Model");

const addToCartController = async (req, res) => {
  const productID = req.params.id;
  const user = req.authID;
  const { color } = req.body;
  try {
    const product = await ProductModel.findById(productID);

    if (!product) {
      return res.status(404).send({ message: "Product Not Found" });
    } else {
      const cartExistProduct = await CartModel.findOne({
        product: productID,
        user,
      });

      if (cartExistProduct) {
        await CartModel.findByIdAndUpdate(
          { _id: cartExistProduct._id },
          { quantity: cartExistProduct.quantity + 1 }
        );

        return res
          .status(200)
          .send({ message: "Quantity Of The Product Is Increased By 1" });
      } else {
        await CartModel.create({
          user,
          product: productID,
          color,
          seller: product.seller,
        });

        return res.status(200).send({ message: "Added To The Cart" });
      }
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

module.exports = addToCartController;
