const { DataTypes } = require('sequelize');
const {conn}=require('../db/DB_connection');

const MedicalHistory = conn.define('MedicalHistory', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },

}, {
  timestamps: true,
  tableName: 'MedicalHistory',
});



module.exports = MedicalHistory;
