const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
const routes = require("./routes");

dotenv.load();

// Configuration

app
  .set("port", process.env.PORT || 3000)
  .set("view engine", "pug")
  .set("views", path.join(__dirname, "views"))
  .set("json spaces", 2);

// Middleware

app
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser());

// Routes

app.use("/", routes.pub);
app.use("/admin", routes.admin);
app.use("/api", routes.api);

module.exports = app;
