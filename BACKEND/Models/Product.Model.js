const mongoose = require("mongoose");

const productSchema = mongoose.model(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    discount: { type: Number, default: "0" },
    primaryImage: { type: String, required: true },
    imageUrls: [{ color: String, images: Array }],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Auth",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = mongoose.model("allproduct", productSchema);
