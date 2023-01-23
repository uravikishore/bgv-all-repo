const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  data: Array,
});
const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
