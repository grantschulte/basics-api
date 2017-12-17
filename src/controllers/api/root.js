function get(req, res, next) {
  console.log("REQ.USER: API", req.user);

  if (!req.user) {
    next(err);
  }

  res.json({ message: "Welcome to the Basics API." });
}

module.exports = {
  get
};
