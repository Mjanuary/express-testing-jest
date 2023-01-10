const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const mongoManager = require("./mongo/connection");
const router = require("./router");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

mongoManager.connect();
app.use(bodyParser.json({ limit: "25mb" }));

app.get("/", (req, res) => res.send("Express + Testing"));

app.use(router);
app.listen(port, () => {
  console.log(`🚀 Server is running at https://localhost:${port}`);
});

module.exports = app;