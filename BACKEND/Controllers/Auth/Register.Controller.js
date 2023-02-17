const URL = process.env.BASE_URL;

const AuthModel = require("../../Models/Auth.Model");
const bcrypt = require("bcrypt");
const TokenModel = require("../../Models/Token.Model");
const SendEmail = require("../../utils/SendEmail");
const crypto = require("crypto");

const registerController = async (req, res) => {
  const { username, email, password, isSeller } = req.body;

  try {
    // Getting The User Details
    const newUser = await AuthModel.findOne({ email });

    if (newUser) {
      res.status(400).send("Already Registered");
    } else {
      const pass = await bcrypt.hash(password, 5);
      const User = await AuthModel.create({
        username,
        email,
        password: pass,
        isSeller: isSeller,
      });

      // create token to verify email
      let token = await TokenModel.create({
        authID: User._id,
        token: crypto.randomBytes(32).toString("hex"),
      });

      let url = `${URL}/auth/${token.authID}/verify/${token.token}`;
      SendEmail(User.email, "Verify Email", url, User.username);
      res.send({
        message: "Please Check Your Mail To Verify Your Account!",
      });
    }
  } catch (err) {
    res.status(401).send({
      err: err.message,
      message: "Somthing Went Wrong While Registering",
    });
  }
};

module.exports = registerController;
