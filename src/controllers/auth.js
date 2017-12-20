const uuid = require("uuid/v1");
const { makeToken } = require("../utils").token;

const users = [
  {
    id: 1,
    email: "admin@example.com",
    name: "Admin",
    password: "password",
    role: "admin"
  },
  {
    id: 2,
    email: "user@example.com",
    name: "User",
    password: "password",
    role: "user"
  }
];

const auth = {
  validate: function(req, res, next) {
    const { email, pass } = req.body.user;

    let user = users.find(u => u.email === email);

    if (user) {
      const payload = {
        id: user.id,
        role: user.role
      };

      makeToken(payload, (err, token) => {
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
};

module.exports = auth;
