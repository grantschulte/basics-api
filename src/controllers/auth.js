const uuid = require("uuid/v1");
const { makeToken } = require("../utils").token;

const auth = {
  validate: function(req, res, next) {
    const {
      email,
      pass
    } = req.body.user;

    if (email === process.env.EMAIL && pass === process.env.PASS) {
      // const user = {
      //   id: uuid(),
      //   admin: true
      // };

      makeToken(user, (err, token) => {
        if (err) {
          return next(err);
        }

        res.json({ token });
      });
    } else {
      res
        .status(401)
        .json({
          status: 401,
          message: "Invalid credentials"
        })
    }
  }
}

module.exports = auth;
