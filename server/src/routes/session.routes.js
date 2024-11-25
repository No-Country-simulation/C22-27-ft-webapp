const { Router } = require("express");
const sessionControllers = require("../controllers/session.controllers.js");

const router = Router();

router.post("/register", sessionControllers.register);

router.post("/login", sessionControllers.login);

module.exports = router;
