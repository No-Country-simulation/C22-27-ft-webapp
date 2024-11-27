const { DataTypes } = require('sequelize');
const {conn}=require('../db/DB_connection');
const User = require("./users.js")
const MedicalHistory = require('./medicalHistory.js')

const Notificacion = conn.define('Notificacion', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
//   usuario_id: {
//     type: DataTypes.BIGINT,
//     allowNull: false,
//     references: {
//       model: Usuario,
//       key: 'id',  
//     },
//   },
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

Notificacion.belongsTo(User, {
  foreignKey: 'patientId',
  as: 'user',
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
