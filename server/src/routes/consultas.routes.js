const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consulta.controller');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.post('/', checkToken, authorization("admin", "user"), consultaController.createConsultation);

router.get('/', checkToken, authorization("admin", "user"), consultaController.findAllConsultations);

router.route('/:id', checkToken, authorization("admin", "user"))
    .get(consultaController.findOneConsultation)
    .patch(consultaController.updateConsultation)
    .delete(consultaController.deleteConsultation);

module.exports = router;