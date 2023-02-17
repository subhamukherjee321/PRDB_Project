const AuthModel = require("../../Models/Auth.Model");

const userUpdateController = async (req, res) => {
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
};

module.exports = userUpdateController;
