const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const Data = require("../models/uploadFile");

const router = express.Router();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 1000000 },

  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(xlsx|xls)$/)) {
      return cb(new Error("Only excel files are allowed!"));
    }
    cb(undefined, true);
  },
});

router.post("/upload", upload.single("file"), (req, res) => {
  // Read the contents of the uploaded file
  const workbook = xlsx.readFile(req.file.path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  // Create a new document in the MongoDB database
  const dataDoc = new Data({ data });
  dataDoc.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send("Data uploaded successfully!");
  });
});

router.get("/", (req, res) => {
  // Retrieve the data from the MongoDB database
  Data.find((err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(data);
  });
});

module.exports = router;
