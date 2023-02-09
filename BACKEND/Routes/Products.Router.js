const { Router } = require("express");
const ProductModel = require("../Models/Product.Model");
const AuthModel = require("../Models/Auth.Model");
const AuthenticatorMiddleware = require("../Middleware/Authenticator.Middleware");
const UploadMiddleware = require("../Middleware/Upload.Middleware");
const cloudinary = require("cloudinary")

const products = Router();
cloudinary.config({
  cloud_name: "drvjfnseu",
  api_key: "244168271121143",
  api_secret: "OVf8OfVrbVRiLntpZJ4dmjy8VA0"
});

products.get("/", async (req, res) => {
  try {
    let productsData = await ProductModel.find();
    res.status(201).send(productsData);
  } catch (err) {
    res.status(400).send({
      error: err.message,
      message: "Somthing Went wrong While Getting The Data",
    });
  }
});

products
  .route("/add")
  .post(
    AuthenticatorMiddleware,
    async (req, res) => {
      let payload = req.body;
      let seller = req.authID;

      try {
        let isSeller = await AuthModel.findOne({ _id: seller });

        if (!isSeller.isSeller) {
          res.status(400).send({ message: "You are not Authorized" });
        } else {
          let data = await ProductModel.findOne({ name: payload.name });
          if (data) {
            res.status(400).send({ message: "Product Already Exists" });
          } else {
            /*let file = req.files.map((ele) => ele.path);
            payload = { ...payload, images: file };
            console.log(payload);
            await ProductModel.create({ ...payload, seller });*/

            const photos = [...req.files.image];
            const photoArray = [];

            for(let i=0; i<photos.length; i++){
              let result = await cloudinary.uploader.upload(photos[i].tempFilePath, {timeout:40000}, (err) => {
                if (err) {
                  return res.send(err);
                } 
              });
              
              photoArray.push({
                url: result.secure_url,
              });
            }

            let product = new ProductModel({...payload, seller,imageUrls:[
              {color:req.body.color, images:photoArray}
            ]});

            await product.save();
            res.status(201).send({ message: "Product Successfully Added" });
          }
        }
      } catch (err) {
        res.status(400).send({
          error: err.message,
          message: "Something Went Wrong While Adding Product",
        });
      }
    }
  );

// products.post("/addData", async (req,res)=> {
//   const photos = [...req.files.image];
//   const photoArray = [];
//   // res.send(photos);
 
//     try {
//       for(let i=0; i<photos.length; i++){
//         let result = await cloudinary.uploader.upload(photos[i].tempFilePath, {timeout:40000}, (err) => {
//           if (err) {
//             return res.send(err);
//           } 
//         });
        
//         photoArray.push({
//           url: result.secure_url,
//         });
//       }
//       let product = new ProductModel({imageUrls:[
//         {color:req.body.color, images:photoArray}
//       ]});
//       await product.save();
//       return res.send(product)
//     } catch (error) {
//       res.send(error.message)
//     }

// })

module.exports = products;
