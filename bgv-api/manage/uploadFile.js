// Need to change accordingly

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const xlsx = require("xlsx");

const upload = multer({
  dest: "uploads/",
});

const DataSchema = new mongoose.Schema({
  data: Array,
});

const Data = mongoose.model("Data", DataSchema);
