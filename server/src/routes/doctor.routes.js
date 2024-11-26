const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

router.post('/', doctorController.createDoctor);

router.get('/', doctorController.findAllDoctors);

router.route('/:id')
    .get(doctorController.findOneDoctor)
    .patch(doctorController.updateDoctor)
    .delete(doctorController.deleteDoctor);
module.exports = router;