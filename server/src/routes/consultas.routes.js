const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consulta.controller');

router.post('/', consultaController.createConsultation);

router.get('/', consultaController.findAllConsultations);

router.route('/:id')
    .get(consultaController.findOneConsultation)
    .patch(consultaController.updateConsultation)
    .delete(consultaController.deleteConsultation);
module.exports = router;