const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

router.post('/', patientController.createPatient);

router.get('/', patientController.findAllPatient);

router.route('/:id')
    .get(patientController.findOnePatient)
    .patch(patientController.updatePatient)
    .delete(patientController.deletePatient);


module.exports = router;