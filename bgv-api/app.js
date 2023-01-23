const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
//const Upload = require("./manage/uploadFile");
const dataRouter = require("./routers/uploadFIleRouters");

const app = express();
require("dotenv/config");
mongoose.set("strictQuery", false);

const url = process.env.URL;

//Middelwares
app.use(morgan("tiny"));
app.use(express.json());

//Routers
const userRouter = require("./routers/userRouters");
app.use(url + "/users", userRouter);
app.use(url + "/data", dataRouter);

app.get(url, (req, res) => {
  const upload = req.body;
  res.send(upload);
});

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to database successful");
  })
  .catch((err) => {
    console.log("Connection to database failed ERROR: " + err);
  });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
