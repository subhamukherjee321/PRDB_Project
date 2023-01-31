const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isUser: {type: Boolean, default: true},
    isSeller: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false}
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const AuthModel = mongoose.model("auth", authSchema);

module.exports = AuthModel;
