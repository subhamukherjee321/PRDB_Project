require("dotenv").config();
const port = process.env.port;

const express = require("express");
const connection = require("./Config/db");
const ProductsRouter = require("./Routes/Products.Router");
const AuthRouter = require("./Routes/Auth.Router");
const ErrorMiddleware = require("./Middleware/Error.Middleware");
// const fileUpload = require("express-fileupload");
const AccessControlMiddleware = require("./Middleware/AccessControl.Middleware");

const app = express();
// app.use(cors);
app.use(AccessControlMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"))
app.use("/products", ProductsRouter);
app.use("/auth", AuthRouter);
app.use(ErrorMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("Welcome To Subha Mukherjee's E-Commerce");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected To DB");
  } catch (err) {
    console.log({
      err,
      message: "Somthing Went Wrong When Connecting To The DB",
    });
  }
  console.log(`Server Running At ${port}`);
});
