const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB ( change your URI )
mongoose
  .connect("Your mongo URI")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Listen Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
