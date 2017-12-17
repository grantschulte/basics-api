const router = require("express").Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");

router
  .use(auth())
  .use(admin());

router.get("/", (req, res, next) => {
  res.json({
    message: "Authorized admin"
  });
});

router.get("/users", (req, res, next) => {
  const users = {};
  res.json(users);
});

module.exports = router;
