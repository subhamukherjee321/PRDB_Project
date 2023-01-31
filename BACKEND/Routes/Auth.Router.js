require("dotenv").config();
const key = process.env.scretKey;

const { Router } = require("express");
const AuthModel = require("../Models/Auth.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = Router();

// For Register
auth.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await AuthModel.find({ email });
      if (newUser.length > 0) {
        res.status(400).send("Already Registered");
      } else {
        const pass = await bcrypt.hash(password, 5);
        await AuthModel.create({ username, email, password: pass });
        res.status(201).send({status: "success", message: "Successfully Registered"});
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