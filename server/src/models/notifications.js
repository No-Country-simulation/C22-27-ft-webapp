const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const MedicalHistory = require('./medicalHistory.js');
const Consultation = require('./consultaModel.js');
const Patient = require('./patientModel.js');

const Notification = conn.define('Notification', {
  id: {
    type: DataTypes.UUID, // Usa solo UUID para el ID
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  patient_id: { // Debe ser UUID si la tabla `patients` usa UUID
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Patient,
      key: 'id',
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  send: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  medicalHistoryId: { // Relación con MedicalHistory
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: MedicalHistory,
      key: 'id',
    },
  },
  consultationId: { // Relación con Consultation
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Consultation,
      key: 'id',
    },
  },
}, {
  timestamps: true,
  tableName: 'notifications',
});

// Relación con Patient
Notification.belongsTo(Patient, {
  foreignKey: 'patient_id',
  as: 'patient',
});

// Relación con MedicalHistory
Notification.belongsTo(MedicalHistory, {
  foreignKey: 'medicalHistoryId',
  as: 'medicalHistory',
});

// Relación con Consultation
Notification.belongsTo(Consultation, {
  foreignKey: 'consultationId',
  as: 'consultation',
});



module.exports = Notification;
