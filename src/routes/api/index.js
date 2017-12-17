const router = require("express").Router();
const auth = require("../../middleware/auth");
const ctrls = require("../../controllers").api;

router.use(auth());

router.get("/", ctrls.root.get);

module.exports = router;
