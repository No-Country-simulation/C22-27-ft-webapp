const { DataTypes } = require('sequelize');
const {conn}=require('../db/DB_connection');
const MedicalHistory = require('./medicalHistory.js')
const Consultation = require('./consultaModel.js')
const Patient = require('./patientModel.js')

const Notificacion = conn.define('Notificacion', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
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
}, {
  timestamps: true,
  tableName: 'notificaciones',
});

Notificacion.belongsTo(Patient, {
  foreignKey: 'patientId',
  as: 'patient',
});

Notificacion.belongsTo(MedicalHistory, {
  foreignKey: 'medicalHistoryId',
  as: 'medicalHistory',
});

Notificacion.belongsTo(Consultation, {
  foreignKey: 'consultationId',
  as: 'consultation',
});

module.exports = Notificacion;
