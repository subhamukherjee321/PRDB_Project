require("dotenv").config();
const key = process.env.secretKey;

const AuthModel = require("../../Models/Auth.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await AuthModel.findOne({ email });
    if (!user) {
      res.status(400).send({ message: "Register First" });
    } else {
      if (!user.isVerified) {
        return res
          .status(400)
          .send({ message: "First Verify Your Account Then Login" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        let token = jwt.sign({ id: user._id }, key, { expiresIn: "10h" });
        res.status(201).send({ message: "Login Success", token });
      } else {
        res.status(400).send({ message: "Wrong Credential" });
      }
    }
  } catch (err) {
    res
      .status(401)
      .send({ err: err.message, message: "Somthing Went Wrong While Login" });
  }
};

module.exports = loginController;
