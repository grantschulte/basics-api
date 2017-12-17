const { checkToken } = require("../utils").token;

module.exports = function() {
  return (req, res, next) => {
    console.log("ADMIN - REQ.USER", req.user);

    if (req.user.role !== "admin") {
      res
        .status(403)
        .json({
          status: 403,
          message: "Forbidden"
        });
    }

    next();
  }
};
