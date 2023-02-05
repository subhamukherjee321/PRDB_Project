const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "auth",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "allproduct",
    },
    userSelection: {
      buyingPrice: {
        type: Number,
        required: true,
      },
      returnType: {
        type: String,
        required: true,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
