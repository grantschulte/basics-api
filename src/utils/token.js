const jwt = require("jsonwebtoken");
const { cleanUser } = require("./user");

function makeToken(user, cb) {
  user = cleanUser(user);

  jwt.sign(user, process.env.JWT_SECRET, (err, token) => {
    if (err) {
      cb(err);
    }

    cb(null, token);
  });
}

function checkToken(token, cb) {
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      cb(err);
    }

    cb(null, decoded);
  });
}

module.exports = {
  makeToken,
  checkToken
};
