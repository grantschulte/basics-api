const { checkToken } = require("../utils").token;

module.exports = function() {
  return (req, res, next) => {
    const token = req.cookies.basicsjwt;
    console.log("TOKEN", token);

    if (!token) {
      return res.redirect("/login");
    }

    checkToken(token, (err, decoded) => {
      if (err) {
        next(err);
      }

      console.log("DECODED", decoded);
      req.user = decoded;
    });
  }
};
