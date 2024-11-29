const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

router.post('/', patientController.createPatient);

router.route('/:id')
    .patch(patientController.updatePatient)

module.exports = router;