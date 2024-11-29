const express = require('express');
const router = express.Router();
const consultaRoutes = require('./consultas.routes');
const patientRoutes = require('./patient.routes');
const doctorRoutes = require('./doctor.routes');
const adminRoutes = require('./admin.routes');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/consultas', consultaRoutes);
router.use('/patients', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/admin', adminRoutes);

module.exports = router;