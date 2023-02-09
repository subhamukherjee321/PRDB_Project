const path = require("path");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log("multer", file);
    let ext = path.extname(file.originalname);
    cb(null, file.colorName + '_' + Date.now() + ext);
  },
});

const upload = multer({
  storage: Storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {

      cb(null, true);
    } else {
      cb(null, false);
      cb(new Error("Only JPG and PNG supported"));
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;

// const path = require("path");
// const multer = require("multer");

// const Storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     console.log("file: ", file);
//     let ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

// const uploadMiddleware = multer({
//   storage: Storage,
//   fileFilter: (req, file, cb) => {
//     console.log(file.mimetype);
//     if (
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg"
//     ) {
//       console.log("got filtered");
//       cb(null, true);
//     } else {
//       cb(null, false);
//       cb(new Error("Image type is Wrong only upload png, jpg or jpeg format"));
//     }
//   },

//   limits: {
//     fileSize: 1024 * 1024 * 2,
//   },
// });

// module.exports = uploadMiddleware;
