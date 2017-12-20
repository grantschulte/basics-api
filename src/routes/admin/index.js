const router = require("express").Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const ctrls = require("../../controllers/admin");

router
  .use(auth())
  .use(admin());

router.get("/", (req, res, next) => {
  res.json({
    message: "Authorized admin"
  });
});

router.get("/users", ctrls.users.getAll);
router.get("/users/:id", ctrls.users.getOne);

module.exports = router;
