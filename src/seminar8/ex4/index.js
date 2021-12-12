"use strict";

const express = require("express");
const departamentsRouter = require("./routes/departaments");
const statusRouter = require("./routes/status");
require("dotenv").config();

const app = express();

const logger = (req, res, next) => {
  console.log(`URL: ${req.url}, method: ${req.method}`);
  next();
};

app.use(logger);

// app.use("/api", logger, departamentsRouter);
// app.use("/status", logger, statusRouter);
app.use("/api", departamentsRouter);
app.use("/status", statusRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).json({ Error: "Something broke!" });
});

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
