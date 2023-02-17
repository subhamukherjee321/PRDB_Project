const AuthModel = require("../../Models/Auth.Model");

const updateController = async (req, res) => {
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
};

module.exports = updateController;
