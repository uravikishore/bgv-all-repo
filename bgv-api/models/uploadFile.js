const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema({
  // some logic for the file excel content
});

Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
