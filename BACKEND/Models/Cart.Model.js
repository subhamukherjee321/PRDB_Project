const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        expectedDeliveryDate: {
          type: Date,
          default: () => new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      },
    ],
    cartValue: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;