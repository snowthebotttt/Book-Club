const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/", function (req, res) {
  res.render("homepage", {});
});

router.get("/login", function (req, res) {
  res.render("login", {});
});

module.exports = router;
