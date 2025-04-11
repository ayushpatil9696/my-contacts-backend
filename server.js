// console.log("i am in express project");
const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//app listens to the port which is port 5000 and consoles it.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
