const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "allproduct",
      required: true
    },
    color: {
      type: String,
      ref: "allproduct"
    },
    expectedDeliveryDate: {
      type: Date,
      default: () => new Date(new Date().setDate(new Date().getDate() + 7)),
    },
    quantity: { type: Number, default: 1 },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
