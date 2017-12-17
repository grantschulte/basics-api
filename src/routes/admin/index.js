const router = require("express").Router();
const adminMiddleware = require("../../middleware/admin");

router.use(adminMiddleware());

router.get("/", (req, res, next) => {
  console.log("REQ.USER: ADMIN", req.user);

  if (!req.user) {
    next(err);
  }

  if (req.user.admin) {
    res.render("admin", { title: "Admin" });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
