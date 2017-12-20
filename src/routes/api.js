const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrls = require("../controllers");

router.use(auth());

router.get("/posts", (req, res, next) => {
  res.json(posts);
});

const posts = [{
  id: 1,
  text: "Post 1"
}, {
  id: 2,
  text: "Post 2"
}];

module.exports = router;
