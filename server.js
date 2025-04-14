// console.log("i am in express project");
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

//the position of app.use matter like if 
// app.use(express.json());
// app.use(errorHandler);
// app.use("/api/contacts", require("./routes/contactRoutes"));
// 
// the system will read errorHandler then goes to app.use("/api/contact", require(".routes/contactRoutes"))
// meaning if an error occurs in app.use("/api/contact", require(".routes/contactRoutes")) 
// it won't go back and read the errorHandler which is defined before 
// the Error point print in the default format not in ur defined format in errorHandler


//app listens to the port which is port 5000 and consoles it.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
