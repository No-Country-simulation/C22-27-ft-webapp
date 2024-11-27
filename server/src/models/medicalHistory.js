const { DataTypes } = require('sequelize');
const {conn}=require('../db/DB_connection');
const Patient = require('./patientModel.js')
const Consultation = require('./consultaModel.js')

const MedicalHistory = conn.define('MedicalHistory', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  patientId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Patient,
      key: 'id',
    },
  },

  consultationId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Consultation,
      key: 'id',
    },
  },

}, {
  timestamps: true,
  tableName: 'MedicalHistory',
});

Patient.hasMany(MedicalHistory, { foreignKey: 'patientId' });  // Un paciente puede tener muchos historiales médicos
MedicalHistory.belongsTo(Patient, { foreignKey: 'patientId' });  // Cada historial médico pertenece a un paciente

Consultation.hasMany(MedicalHistory, { foreignKey: 'consultationId' });  // Una consulta puede estar asociada a muchos historiales médicos
MedicalHistory.belongsTo(Consultation, { foreignKey: 'consultationId' });  // Cada historial médico pertenece a una consulta


module.exports = MedicalHistory;
