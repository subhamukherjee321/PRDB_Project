require("dotenv").config();
const key = process.env.scretKey;

const { Router } = require("express");
const AuthModel = require("../Models/Auth.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TokenModel } = require("../Models/Token.Model");
const SendEmail = require("../utils/SendEmail");
const crypto = require("crypto");

const auth = Router();

// For Register
auth.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await AuthModel.findOne({ email });
    if (newUser) {
      res.status(400).send("Already Registered");
    } else {
      const pass = await bcrypt.hash(password, 5);
      const User = await AuthModel.create({ username, email, password: pass });
      const token = await new TokenModel({
        ID: User._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();

      const url = `${process.env.BASE_URL}/users/${User._id}/verify/${token.token}`;
      await SendEmail(User.email, "Verify Email", url, User.username);
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
});

// For Login
auth.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await AuthModel.findOne({ email });
    if (!user) {
      res.status(400).send({ message: "Register First" });
    } else {
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
});

module.exports = auth;
