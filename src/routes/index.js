const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrls = require("../controllers");

router.use(auth());

router.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the public API"
  })
});

router.post("/login", ctrls.auth.validate);

module.exports = router;
