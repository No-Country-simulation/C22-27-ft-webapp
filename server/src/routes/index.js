const express = require('express');
const router = express.Router();
const consultaRoutes = require('./consultas.routes');
const patientRoutes = require('./patient.routes');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/consultas', consultaRoutes);
router.use('/patients', patientRoutes);

module.exports = router;