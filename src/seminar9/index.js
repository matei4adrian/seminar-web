"use strict";

const express = require("express");
const sequelize = require("./sequelize");
require("./models/employees");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/employees"));

app.listen(7000, async () => {
  console.log("Server strted on http://localhost:7000");
  try {
    await sequelize.authenticate(app);
    console.log("Connection has been established successfully");
  } catch (err) {
    console.error("Unable to connect to the database: ", err);
  }
});
