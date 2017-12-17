const token = require("./token");
const user = require("./user");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  isDev,
  token,
  user
};
