const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController.js');
const authorization = require("../middlewares/authorization.middleware.js");
const checkToken = require('../middlewares/checkTocken.middleware.js');

router.get('/', checkToken , authorization("admin"), notificationsController.getAllNotification); 
router.get('/:id',notificationsController.getNotificationById);
router.get('/userId/:usuario_id', notificationsController.getNotificationByUser);
router.post('/', notificationsController.createNotification);
router.patch('/:id/enviado', notificationsController.markAsSent);
router.delete('/:id', notificationsController.deleteNotificationById);

module.exports = router;
