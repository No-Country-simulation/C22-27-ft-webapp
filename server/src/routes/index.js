const express = require('express');
const router = express.Router();
const notificationsRouter = require("./notifications.routes.js");
const sessionRouter = require("./session.routes.js");
const usersRouter = require("./users.routes.js")

router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.use("/session", sessionRouter);
router.use("/notifications", notificationsRouter);
router.use("/users", usersRouter);

module.exports = router;