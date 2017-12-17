const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
const apiVersion = "1.0.0";

const routes = require("./routes");
const adminRoutes  = require("./routes/admin");
const errors = require("./middleware/errors");


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

app
  .use(`/api/${apiVersion}`, routes)
  .use(`/api/${apiVersion}/admin`, adminRoutes)
  .use("*", (req, res) => {
    res
      .status(404)
      .render("404");
  });

// Error Handling

app
  .use(errors.log)
  .use(errors.server);

module.exports = app;
