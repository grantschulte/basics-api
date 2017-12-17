const uuid = require("uuid/v1");
const { makeToken } = require("../../utils").token;

function get(req, res, next) {
  res.render("login", { title: "Login" } )
}

function post(req, res, next) {
  const { email, pass } = req.body.user;

  if (email === process.env.EMAIL && pass === process.env.PASS) {
    const user = {
      id: uuid(),
      admin: true
    };

    makeToken(user, (err, token) => {
      if (err) {
        next(err);
      }

      res.cookie("basicsjwt", token);
      res.redirect("/admin");
    });
  } else {
    next(new Error("Invalid credentials."));
  }
}

module.exports = {
  get,
  post
};
