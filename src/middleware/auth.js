const { checkToken } = require("../utils").token;

module.exports = function() {
  return (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
      res
        .status(401)
        .json({
          status: 401,
          message: "Unauthorized"
        });

      return;
    }

    checkToken(token, (err, decoded) => {
      if (err) {
        res
          .status(401)
          .json({
            status: 401,
            message: "Invalid token"
          });

        return;
      }

      req.user = decoded;
      next();
    });
  }
};
