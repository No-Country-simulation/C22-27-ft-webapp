const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.post('/',checkToken, authorization("admin", "user") , patientController.createPatient);

router.route('/:id')
.patch(patientController.updatePatient)

module.exports = router;