const { Router } = require("express");
const ValidatorMiddleware = require("../Middleware/Validator.Middleware");
const AuthenticatorMiddleware = require("../Middleware/Authenticator.Middleware");
const registerController = require("../Controllers/Auth/Register.Controller");
const loginController = require("../Controllers/Auth/Login.Controller");
const verificationController = require("../Controllers/Auth/Verification.Controller");
const updateController = require("../Controllers/Auth/Admin.Update.Controller");
const deleteController = require("../Controllers/Auth/Admin.Delete.Controller");
const userUpdateController = require("../Controllers/Auth/User.Update.Controller");

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
      .withMessage("Password Contains Minimum 5 Character"),
    ValidatorMiddleware,
    registerController
  );

// For Login
auth
  .route("/login")
  .post(
    body("email").isEmail().withMessage("Please Enter A Vaild Email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password Should Contains Minimum 5 Character"),
    ValidatorMiddleware,
    loginController
  );

// Verification Router
auth.route("/:authID/verify/:token").get(verificationController);

// Admin Access Update For All Data
auth.route("/admin/update/:id").patch(AuthenticatorMiddleware, updateController);

// Admin Access To Delete All Data
auth.route("/delete/:id").delete(AuthenticatorMiddleware, deleteController);

// User Can Update Own Data
auth.route("/user/update/:id").patch(AuthenticatorMiddleware, userUpdateController);

module.exports = auth;
