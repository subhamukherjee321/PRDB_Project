const CartModel = require("../../Models/Cart.Model");

const quantityDecCart = async (req, res) => {
  const productID = req.params.id;
  const user = req.authID;

  try {
    const isProduct = await CartModel.findOne({ product: productID, user });

    if (!isProduct) {
      return res.status(404).send({ message: "Product Not Found At Cart" });
    } else {
      if (isProduct.quantity > 1) {
        await CartModel.findByIdAndUpdate(
          { _id: isProduct._id },
          { quantity: isProduct.quantity - 1 }
        )

        res.status(200).send({message: "Product Quantity Decreased By 1"})
      } else if(isProduct.quantity === 1) {
         await CartModel.findByIdAndDelete({_id: isProduct._id});
         res.status(200).send({message: "Product Is Removed From The Cart"});
      }
    }
  } catch (err) {
    res.status(500).send({
      message: "Somthing Went Wrong While Updating The Cart",
      error: err.message,
    });
  }
};

module.exports = quantityDecCart;
