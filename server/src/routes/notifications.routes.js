const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController');

router.post('/', notificationsController.createNotification);
router.get('/', notificationsController.getAllNotification); 
router.get('/:usuario_id', notificationsController.getNotificationByUsuario);
router.patch('/:id/enviado', notificationsController.markAsSent); 

module.exports = router;
