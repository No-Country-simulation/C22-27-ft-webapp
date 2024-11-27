const express = require('express');
const router = express.Router();
const notificationsRouter = require("./notifications.routes.js");
const sessionRouter = require("./session.routes.js");
const consultaRouter = require("./consultas.routes.js");
const patientRouter = require("./patient.routes.js");
const doctorRouter = require("./doctor.routes.js")

router.use("/session", sessionRouter);
router.use("/notifications", notificationsRouter);
router.use('/consultas', consultaRouter);
router.use('/patients', patientRouter);
router.use('/doctor', doctorRouter);

module.exports = router;