require("dotenv").config();
const key = process.env.secretKey;
const TokenModel = require("../../Models/Token.Model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthModel = require("../../Models/Auth.Model");

const verificationController = async (req, res) => {
  try {
    let { authID, token } = req.params;
    let isToken = await TokenModel.findOne({
      authID,
      token,
    });

    if (!isToken) {
      return res.render("error");
    }

    await AuthModel.updateOne({ _id: authID }, { isVerified: true });

    await TokenModel.deleteOne({ authID });

    res.render("index");
  } catch (error) {
    res.render("error");
  }
};

module.exports = verificationController;
