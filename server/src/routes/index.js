const express = require('express');
const router = express.Router();
const notificationsRouter = require("./notifications.routes.js");


router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use("/notifications", notificationsRouter)

module.exports = router;