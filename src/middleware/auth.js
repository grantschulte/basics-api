const { checkToken } = require("../utils").token;

module.exports = function() {
  return (req, res, next) => {
    const token = req.cookies.basicsjwt;
    console.log("TOKEN", token);

    if (!token) {
      res.status(401);
      return res.json({
        message: "Unauthorized"
      });
    }

    checkToken(token, (err, decoded) => {
      if (err) {
        next(err);
      }

      console.log("DECODED", decoded);
      req.user = decoded;
      next();
    });
  }
};
