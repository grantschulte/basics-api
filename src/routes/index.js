const router = require("express").Router();
const ctrls = require("../controllers");

router.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the API"
  });
});

router.post("/login", ctrls.auth.validate);

module.exports = router;
