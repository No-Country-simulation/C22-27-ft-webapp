const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consulta.controller');

router.get('/', consultaController.create);

router.get('/', consultaController.findAll);

router.route('/:id')
    .get(consultaController.findOne)
    .put(consultaController.update)
    .delete(consultaController.remove);
module.exports = router;