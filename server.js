const express = require("express");
var cors = require("cors");
const mongoManager = require("./mongo/connection");
const bodyParser = require("body-parser");
const router = require("./router");
require("dotenv").config();

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