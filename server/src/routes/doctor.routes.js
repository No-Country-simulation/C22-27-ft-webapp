const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.post('/', checkToken, authorization("admin"), doctorController.createDoctor);
router.get('/:id', checkToken, authorization("doctor"), doctorController.getAllCalendar)

router.route('/:id', checkToken, authorization("admin", "doctor")).patch(doctorController.updateDoctor)

module.exports = router;