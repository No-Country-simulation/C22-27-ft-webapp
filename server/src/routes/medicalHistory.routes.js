const express = require('express');
const router = express.Router();
const medicalHistoryController = require('../controllers/medicalHistory.controller.js');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.get('/',checkToken, authorization("admin") , medicalHistoryController.getAllMedicalHistory); 
router.get('/:id',checkToken, authorization("admin", "doctor") ,medicalHistoryController.getMedicalHistroyById);
router.get('/patientId/:patientId',checkToken, authorization("admin", "user", "doctor"), medicalHistoryController.getMedicalHistoryByUser);
router.post('/',checkToken, authorization("doctor"), medicalHistoryController.createMedicalHistory);
router.delete('/:id',checkToken, authorization("admin"), medicalHistoryController.deleteMedicalHistoryById);

module.exports = router;