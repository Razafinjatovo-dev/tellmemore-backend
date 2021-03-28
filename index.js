require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const formidable = require("express-formidable");
const app = express();
const cors = require('cors')

app.use(formidable());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//IMPORT ROUTES 
const formRoutes = require('./routes/form-route')

// ACTIVATE ROUTES
app.use(formRoutes)
//START SERVER
app.listen(process.env.PORT, () => {
  console.log("server started");
});
