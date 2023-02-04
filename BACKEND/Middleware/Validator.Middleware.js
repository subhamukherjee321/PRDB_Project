const { validationResult } = require("express-validator");

const validator = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    res.status(400);
    let msg = error.array().map(({ msg }) => msg);
    throw new Error(JSON.stringify(msg));
  }
  next();
};

module.exports = validator;