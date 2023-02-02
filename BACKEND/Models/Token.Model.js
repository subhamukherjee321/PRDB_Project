const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    ID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "auth",
      unique: true,
    },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), expires: 3600 },
  },
  {
    versionKey: false,
  }
);

const TokenModel = mongoose.model("token", tokenSchema);

module.exports = {
  TokenModel,
};