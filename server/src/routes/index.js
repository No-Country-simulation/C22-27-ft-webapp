const express = require('express');
const router = express.Router();
const notificationsRouter = require("./notifications.routes.js");
const sessionRouter = require("./session.routes.js")


router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.use("/ session", sessionRouter);
router.use("/notifications", notificationsRouter)

module.exports = router;