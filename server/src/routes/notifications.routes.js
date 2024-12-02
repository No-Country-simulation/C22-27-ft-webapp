const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications.controller.js');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');


// Para autorizar y verificar tocken se utilida como
// middleware : checkToken y  authorization("admin, patient, doctor")


router.get('/',checkToken , authorization("admin", "doctor"), notificationsController.getAllNotification); 
router.get('/notificationId/:id',notificationsController.getNotificationById);
router.get('/patientId/:id', notificationsController.getNotificationByUser);
router.post('/', notificationsController.createNotification);
router.patch('/:id/enviado', notificationsController.markAsSent);
router.delete('/:id', notificationsController.deleteNotificationById);

module.exports = router;
