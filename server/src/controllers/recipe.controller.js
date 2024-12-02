const { conn } = require('../db/DB_connection');
const Patient = require("../models/patientModel");
const Consultation = require("../models/consultaModel");
const Doctor = require("../models/doctorModel");
const Recipe = require('../models/recipeModel')
// Crear una notificación
exports.createRecipe = async (req, res) => {
  try {
    const { consultationId,...rest  } = req.body;

    const recipe = await Recipe.create({
      ...rest,
      consultationId
    });

    res.status(201).json({ message: "Notification successfully created.", data: recipe });
  } catch (error) {
    res.status(500).json({ error: "Error creating the notification.", details: error.message });
  }
};

// Obtener todas las notificaciones
exports.getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: [
        {
          model: Consultation,
          as: "consultation",
          include: [
            {
              model: Patient,
              as: 'patient',
              attributes: ['id', 'name', 'email'],
            },
            {
              model: Doctor,
              as: 'doctor',
              attributes: ['id', 'name', 'specialty'],
            },
          ],
        },
      ],
    });

    res.status(200).json({message: "encontradas", data: recipes});
  } catch (error) {
    res.status(500).json({ error: "Error fetching the notifications.", details: error.message });
  }
};

// Obtener notificaciones por usuario
exports.getNotificationByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const notifications = await Notification.findOne({
      where: { id },
      include: [
        {
          model: Patient,
          as: 'patient',
        },
        {
          model: Consultation,
          as: 'consultation',
        },
      ],
    });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user notifications.", details: error.message });
  }
};

// Marcar una notificación como enviada
exports.markAsSent = async (req, res) => {
  try {
    const { patientId } = req.params;

    const notifications = await Notification.findOne(patientId);
    if (!notifications) {
      return res.status(404).json({ error: "Notification not found." });
    }

    notifications.send = true;
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

    res.status(200).json({ message: 'Notification successfully found.', data: { notification } });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving the notification.', details: error.message });
  }
};

// Eliminar notificacion
exports.deleteNotificationById = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findByPk(id);
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found.' });
    }
    await notification.destroy();
    res.status(200).json({ message: 'Notification delete.' });
  } catch (error) {
    res.status(500).json({ error: 'Error while deleting.', details: error.message });
  }
};