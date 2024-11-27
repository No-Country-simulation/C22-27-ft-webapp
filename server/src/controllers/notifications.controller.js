const Notification = require('../models/notifications.js');

// Crear una notificación
exports.createNotification = async (req, res) => {
  try {
    const { patient_id, message, type } = req.body;
   
    const notification = await Notification.create({
      patient_id,
      message,
      type 
    });

    res.status(201).json({ message: "Notification successfully created.", notification });
  } catch (error) {
    res.status(500).json({ error: "Error creating the notification.", details: error.message });
  }
};

// Obtener todas las notificaciones
exports.getAllNotification = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
        attributes: ['message', 'type'],
    });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the notifications.", details: error.message });
  }
};

// Obtener notificaciones por usuario
exports.getNotificationByUser = async (req, res) => {
  try {
    const { patient_id } = req.params;
    const notifications = await Notification.findAll({
      where: { patient_id },
    });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user notifications.", details: error.message });
  }
};

// Marcar una notificación como enviada
exports.markAsSent = async (req, res) => {
  try {
    const { id } = req.params;

    const notifications = await Notification.findByPk(id);
    if (!notifications) {
      return res.status(404).json({ error:"Notification not found."});
    }

    notifications.enviado = true;
    await notifications.save();

    res.status(200).json({ message: "Notification marked as sent.", details: notifications });
  } catch (error) {
    res.status(500).json({ error: "Error marking the notification as sent.", details: error.message });
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const notification = await Notification.findByPk(id);
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found.' });
    }

    res.status(200).json({ message: 'Notificación encontrada correctamente.',  data: { notification }  });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la notificación.', details: error.message });
  }
};

exports.deleteNotificationById = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findByPk(id);
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found.' });
    }
    await notification.destroy();
    res.status(200).json({ message: 'Notificación eliminada correctamente.'});
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la notificación.', details: error.message });
  }
};