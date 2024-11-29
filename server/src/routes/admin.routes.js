const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/', adminController.createAdmin);
router.get('/', adminController.findAllAdmins);
router.get('/doctors', adminController.findAllDoctors);
router.get('/patients', adminController.findAllPatient);

router.route('/:id')
    .get(adminController.findOneAdmin)
    .patch(adminController.updateAdmin)
    .delete(adminController.deleteAdmin);

// Doctor routes

router.route('/doctors/:id')
    .get(adminController.findOneDoctor)
    .delete(adminController.deleteDoctor);

// Patient routes

router.route('/patients/:id')
    .get(adminController.findOnePatient)
    .delete(adminController.deletePatient);

module.exports = router;