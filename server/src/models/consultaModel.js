const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const MedicalHistory = require('./medicalHistory.js')

const Consultation = conn.define('consultation', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
    ,
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    desciption: {
        type: DataTypes.STRING,
        allowNull: false
    },
});


module.exports = Consultation;