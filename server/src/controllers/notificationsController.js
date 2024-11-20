const Notificacion = require('../models/notifications.js');
//const Usuario = require('../models/Usuarios'); 

// Crear una notificación
exports.createNotification = async (req, res) => {
  try {
    const { usuario_id, mensaje, tipo } = req.body;

    // Crear la notificación
    const notificacion = await Notificacion.create({ usuario_id, mensaje, tipo });

    res.status(201).json({ message: 'Notificación creada con éxito.', notificacion });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la notificación.', details: error.message });
  }
};

// Obtener todas las notificaciones
exports.getAllNotification = async (req, res) => {
  try {
    const notificaciones = await Notificacion.findAll({
      include: {
        //model: Usuario,
        attributes: ['nombre', 'email'], 
      },
    });

    res.status(200).json(notificaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las notificaciones.', details: error.message });
  }
};

// Obtener notificaciones por usuario
exports.getNotificationByUsuario = async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const notificaciones = await Notificacion.findAll({
      where: { usuario_id },
    });

    res.status(200).json(notificaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener notificaciones del usuario.', details: error.message });
  }
};

// Marcar una notificación como enviada
exports.markAsSent = async (req, res) => {
  try {
    const { id } = req.params;

    const notificacion = await Notificacion.findByPk(id);
    if (!notificacion) {
      return res.status(404).json({ error: 'Notificación no encontrada.' });
    }

    notificacion.enviado = true;
    await notificacion.save();

    res.status(200).json({ message: 'Notificación marcada como enviada.', notificacion });
  } catch (error) {
    res.status(500).json({ error: 'Error al marcar la notificación como enviada.', details: error.message });
  }
};
