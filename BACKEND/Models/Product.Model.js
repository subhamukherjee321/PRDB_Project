const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, default: 5 },
    category: { type: String, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    saveMoney: { type: Number, required: true },
    images: [{ color: String, image_urls: [] }],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "auth",
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

const ProductModel = mongoose.model("allproduct", productSchema);

module.exports = ProductModel;

/*{
  "name": "Rockerz 450",
  "category": "Wireless Headset",
  "type": "BLUETOOTH HEADPHONES",
  "brand": "Boat",
  "description": "Over Ear Bluetooth Headphones with Upto 15 Hours Playback, Adaptive Headband, 40mm Dynamic Driver, 300 mah Battery",
  "price": 3990,
  "discountPrice": 1499,
  "discount": 62,
  "saveMoney": 2491,
  "primaryImage": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1673002681",
  "imageUrls": [
{
  "color": "Beige",
  "images": [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1673002681",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/drivers-blue_700x.jpg?v=1673002561",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/last-beige_700x.jpg?v=1673002563",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/lightweight-beige_700x.jpg?v=1673002503",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/playback-beige_700x.jpg?v=1673002441"
  ]
},
{
  "color": "Black",
  "images": [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1673002682",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/drivers-black_700x.jpg?v=1673002623",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/lightweight-black_700x.jpg?v=1673002501",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/playback-black_700x.jpg?v=1673002442",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/premium-matte-finish_700x.jpg?v=1673002382",
    {
      "color": "Lightblue",
      "images": [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1673002621",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/drivers-beige_700x.jpg?v=1673002623",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/lightweight-blue_700x.jpg?v=1673002502",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/playback-blue_700x.jpg?v=1673002805"
      ]
    }
  ]
}
]
}*/
