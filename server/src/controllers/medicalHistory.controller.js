const MedicalHistory = require('../models/medicalHistory.js');

// Crear una History
exports.createMedicalHistory = async (req, res) => {
  try {
    const { patientId, consultationId } = req.body;
   
    const notification = await MedicalHistory.create({
      patientId,
      consultationId,
    });

    res.status(201).json({ message: "Medical History successfully created.", notification });
  } catch (error) {
    res.status(500).json({ error: "Error creating the History.", details: error.message });
  }
};

// Obtener todas las Historias Medicas
exports.getAllMedicalHistory = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistory.findAll({
        attributes: ['message', 'type'],
    });
    res.status(200).json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the medical Histories.", details: error.message });
  }
};

// Obtener notificaciones por usuario
exports.getMedicalHistoryByUser = async (req, res) => {
  try {
    const { patient_id } = req.params;
    const medicalHistory = await MedicalHistory.findAll({
      where: { patient_id },
    });

    res.status(200).json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the medical Histories.", details: error.message });
  }
};

exports.getMedicalHistroyById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const medicalHistory = await MedicalHistory.findByPk(id);
    if (!medicalHistory) {
      return res.status(404).json({ error: 'Medical History not found.' });
    }

    res.status(200).json({ message: 'Medical History found',  data: { medicalHistory }  });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the medical Histories.', details: error.message });
  }
};

exports.deleteMedicalHistoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const medicalHistory = await MedicalHistory.findByPk(id);
    if (!medicalHistory) {
      return res.status(404).json({ error: 'Medical History not found.' });
    }
    await medicalHistory.destroy();
    res.status(200).json({ message: 'Medical History delete.'});
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the medical history.', details: error.message });
  }
};