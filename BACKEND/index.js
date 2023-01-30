require("dotenv").config();
const port = process.env.port;

const express = require("express");
const connection = require("./Config/db");

const app = express();
app.use(express.json());

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