const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const Patient = require('./patientModel.js')
const Consultation = require('./consultaModel.js');
const Doctor = require('./doctorModel.js');
const Notification = require('./notifications.js')

const MedicalHistory = conn.define('MedicalHistory', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
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

MedicalHistory.belongsTo(Patient, {
  foreignKey: 'patientId',
  targetKey: 'id',
});

MedicalHistory.belongsTo(Consultation, {
  foreignKey: 'consultationId',
  targetKey: 'id',
});



module.exports = MedicalHistory;
