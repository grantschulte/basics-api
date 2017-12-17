const router = require("express").Router();
const ctrls = require("../../controllers").pub;

router.get("/", (req, res, next) => {
  res.redirect("/login");
});

router.get("/login", ctrls.login.get);
router.post("/login", ctrls.login.post);

module.exports = router;
