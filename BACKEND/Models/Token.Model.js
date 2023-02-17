const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    authID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "auth",
    },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), expires: 3600 },
  },
  {
    versionKey: false,
  }
);

const TokenModel = mongoose.model("token", tokenSchema);

module.exports = TokenModel;
