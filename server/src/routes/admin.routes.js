const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.post('/', checkToken, authorization("superAdmin", "admin") ,adminController.createAdmin);
router.get('/', checkToken, authorization("admin"),  adminController.findAllAdmins);
router.get('/doctors', checkToken, authorization("admin"), adminController.findAllDoctors);
router.get('/patients', checkToken, authorization("admin"), adminController.findAllPatient);

router.route('/:id',checkToken, authorization("admin"))
    .get(adminController.findOneAdmin)
    .patch(adminController.updateAdmin)
    .delete(adminController.deleteAdmin);

// Doctor routes

router.route('/doctors/:id',checkToken, authorization("admin"))
    .get(adminController.findOneDoctor)
    .delete(adminController.deleteDoctor);

// Patient routes

router.route('/patients/:id')
    .get(checkToken, authorization("admin", "doctor"),adminController.findOnePatient)
    .delete(checkToken, authorization("admin"),adminController.deletePatient);

module.exports = router;