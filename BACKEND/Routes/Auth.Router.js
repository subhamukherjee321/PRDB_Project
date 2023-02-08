require("dotenv").config();
const key = process.env.secretKey;

const { Router } = require("express");
const AuthModel = require("../Models/Auth.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TokenModel } = require("../Models/Token.Model");
const SendEmail = require("../utils/SendEmail");
const crypto = require("crypto");
const ValidatorMiddleware = require("../Middleware/Validator.Middleware");
const AuthenticatorMiddleware = require("../Middleware/Authenticator.Middleware");

const auth = Router();
const { body } = require("express-validator");

// For Register
auth
  .route("/register")
  .post(
    body("username")
      .exists({ checkFalsy: true })
      .withMessage("Please Enter Username"),
    body("email").isEmail().withMessage("Please Enter Email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password Contains Minimume 5 Character"),
    ValidatorMiddleware,
    async (req, res) => {
      const { username, email, password, isSeller } = req.body;

      try {
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
          res.status(200).send({ message: "Account Created Successfully" });
          /*const token = await new TokenModel({
            ID: User._id,
            token: crypto.randomBytes(32).toString("hex"),
          }).save();

          const url = `${process.env.BASE_URL}/users/${User._id}/verify/${token.token}`;
          await SendEmail(User.email, "Verify Email", url, User.username);
          res.send({
            message: "Please Check Your Mail To Verify Your Account!",
          });*/
        }
      } catch (err) {
        res.status(401).send({
          err: err.message,
          message: "Somthing Went Wrong While Registering",
        });
      }
    }
  );

// For Login
auth.post(
  "/login",
  body("email").isEmail().withMessage("Please Enter A Vaild Email"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password Should Contains Minimum 5 Character"),
  ValidatorMiddleware,
  async (req, res) => {
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
  }
);

// Admin Access Update For All Data
auth.route("/update/:id").patch(AuthenticatorMiddleware, async (req, res) => {
  let payload = req.body;
  let ID = req.params.id;
  let admin = req.authID;

  try {
    let isAdmin = await AuthModel.findOne({ _id: admin });
    if (!isAdmin.isAdmin) {
      res
        .status(400)
        .send({ status: "Error", message: "You are not Authorized" });
    } else {
      if (payload.isSeller || payload.isAdmin) {
        await AuthModel.findByIdAndUpdate(
          { _id: ID },
          { isSeller: payload.isSeller, isAdmin: payload.isAdmin }
        );
        res
          .status(200)
          .send({ status: "Success", message: "Updated Successfully" });
      } else {
        res.send({ status: "Failed", message: "Data is missing" });
      }
    }
  } catch (err) {
    res.status(400).send({
      error: err.message,
      message: "Somthing Went Wrong While Updating",
    });
  }
});

// Admin Access To Delete All Data
auth.route("/delete/:id").delete(AuthenticatorMiddleware, async (req, res) => {
  let ID = req.params.id;
  let admin = req.authID;

  try {
    let isAdmin = await AuthModel.findOne({ _id: admin });
    if (!isAdmin.isAdmin) {
      res
        .status(400)
        .send({ status: "Failed", message: "You are not Authorized" });
    } else {
      await AuthModel.findByIdAndDelete({ _id: ID });
      res.status(200).send({ status: "Success", message: "Data Is Deleted" });
    }
  } catch (err) {
    res.status(400).send({
      error: err.message,
      message: "Somthing Went Wrong While Deleting",
    });
  }
});

// User Can Update Own Data
auth
  .route("/selfupdate/:id")
  .patch(AuthenticatorMiddleware, async (req, res) => {
    let payload = req.body;
    let ID = req.params.id;
    let user = req.authID;

    try {
      if (user === ID) {
        await AuthModel.findByIdAndUpdate({ _id: ID }, payload);
        res
          .status(200)
          .send({ status: "Success", message: "Updated Successfully" });
      } else {
        res
          .status(500)
          .send({ status: "Failed", message: "You Are Not Authorized" });
      }
    } catch (err) {
      res.status(400).send({
        error: err.message,
        message: "Something Went Wrong While Updating",
      });
    }
  });

module.exports = auth;
