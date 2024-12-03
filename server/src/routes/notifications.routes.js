const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications.controller.js');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');


// Para autorizar y verificar tocken se utilida como
// middleware : checkToken y  authorization("admin, patient, doctor")


router.get('/',checkToken , authorization("admin"), notificationsController.getAllNotification); 
router.get('/notificationId/:id', checkToken, authorization("admin") ,notificationsController.getNotificationById);
router.get('/patientId/:id', checkToken, authorization("admin", "user") , notificationsController.getNotificationByUser);
router.post('/', checkToken, authorization("admin") , notificationsController.createNotification);
router.patch('/:id/enviado', notificationsController.markAsSent);
router.delete('/:id', checkToken, authorization("admin") , notificationsController.deleteNotificationById);

module.exports = router;
