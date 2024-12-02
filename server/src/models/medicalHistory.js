const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');

const MedicalHistory = conn.define('MedicalHistory', {
  id: {
    // type: DataTypes.BIGINT,
    // primaryKey: true,
    // type: DataTypes.UUID,
    // defaultValue: DataTypes.UUIDV4
    type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false,
  },
  
}, {
  timestamps: true,
  tableName: 'MedicalHistory',
});

module.exports = MedicalHistory;
