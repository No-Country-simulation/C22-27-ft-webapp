const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications.controller.js');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');


// Para autorizar y verificar tocken se utilida como
// middleware : checkToken y  authorization("admin, patient, admin")


router.get('/', notificationsController.getAllNotification); 
router.get('/:id',notificationsController.getNotificationById);
router.get('/userId/:usuario_id', notificationsController.getNotificationByUser);
router.post('/', notificationsController.createNotification);
router.patch('/:id/enviado', notificationsController.markAsSent);
router.delete('/:id', notificationsController.deleteNotificationById);

module.exports = router;
