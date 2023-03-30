const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const router = require("./routes/todoRoute");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_STRING;

app.use(express.json());
app.use(cors());
app.use("/", router);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
  .then(() => console.log("Connected to Database"))
  .then(() => app.listen(PORT))
  .then(console.log(`Listening on Port ${PORT}`))
  .catch((err) => console.log(err));

