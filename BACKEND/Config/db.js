require("dotenv").config();
const mongoose = require("mongoose");
const URL = process.env.mongoURL
mongoose.set('strictQuery', false);

const connection = mongoose.connect(URL);

module.exports = connection;