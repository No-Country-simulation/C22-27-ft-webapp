const { Router } = require("express");
const sessionControllers = require("../controllers/session.controller.js");

const router = Router();

router.post("/login", sessionControllers.login);
router.post('/logout', sessionControllers.logout);

module.exports = router;
