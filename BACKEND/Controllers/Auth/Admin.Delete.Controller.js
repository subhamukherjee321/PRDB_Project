const AuthModel = require("../../Models/Auth.Model");

const deleteController = async (req, res) => {
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
};

module.exports = deleteController;
