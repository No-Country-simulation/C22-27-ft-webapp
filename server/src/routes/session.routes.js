const { Router } = require("express");
const sessionControllers = require("../controllers/session.controllers.js");

const router = Router();

router.post("/register", sessionControllers.register);

router.post("/login", sessionControllers.login);

router.post("/auth", sessionControllers.auth);

router.get("/current", async (req, res) => {
    res.status(200).json({ status: "ok", user: req.user });
  });

module.exports = router;
