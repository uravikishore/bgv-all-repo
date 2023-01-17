const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const XLSX = require("xlsx");

// const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongo DB connection //
const CONNECTION_STRING =
  "mongodb+srv://admin:dasaradha@cluster0.aapwm.mongodb.net/?retryWrites=true&w=majority";

app.listen(3000, () => {
  MongoClient.connect(
    CONNECTION_STRING,
    { useNewUrlParser: true },
    (error, client) => {
      database = client.db(DATABASE);
      console.log("Mongo DB connected Successful");
    }
  );
});

const DATABASE = "bvg-db";
var database;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
