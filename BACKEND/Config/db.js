require("dotenv").config();
const mongoose = require("mongoose");
const URL = process.env.mongoURL

const connection = mongoose.connect(URL);

module.exports = connection;