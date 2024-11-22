const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController.js');

router.get('/', notificationsController.getAllNotification); 
router.get('/:id',notificationsController.getNotificationById);
router.get('/:usuario_id', notificationsController.getNotificationByUser);
router.post('/', notificationsController.createNotification);
router.patch('/:id/enviado', notificationsController.markAsSent);
router.delete('/:id', notificationsController.deleteNotificationById);

module.exports = router;
