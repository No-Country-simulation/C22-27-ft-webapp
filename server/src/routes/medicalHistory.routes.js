const express = require('express');
const router = express.Router();
const medicalHistoryController = require('../controllers/medicalHistory.controller.js');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.get('/', medicalHistoryController.getAllMedicalHistory); 
router.get('/:id',medicalHistoryController.getMedicalHistroyById);
router.get('/userId/:usuario_id', medicalHistoryController.getMedicalHistoryByUser);
router.post('/', medicalHistoryController.createMedicalHistory);
router.delete('/:id', medicalHistoryController.deleteMedicalHistoryById);

module.exports = router;