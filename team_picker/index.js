const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});



const DOMAIN = "localhost";
const PORT = "3000";
app.listen(PORT, DOMAIN, () => {
  console.log(`Server is listening on ${DOMAIN}:${PORT}`);
});