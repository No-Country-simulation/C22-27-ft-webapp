const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

router.post('/', doctorController.createDoctor);
router.get('/:id', doctorController.getAllCalendar)

router.route('/:id').patch(doctorController.updateDoctor)

module.exports = router;