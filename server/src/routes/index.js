const express = require('express');
const router = express.Router();
const consultaRoutes = require('./consultas.routes');
const patientRoutes = require('./patient.routes');
const doctorRoutes = require('./doctor.routes');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/consultas', consultaRoutes);
router.use('/patients', patientRoutes);
router.use('/doctor', doctorRoutes);

module.exports = router;