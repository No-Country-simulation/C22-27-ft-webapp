const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const Consultation = require('./consultaModel');

const Patient = conn.define('patient',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },

    // userId: {},

    dateBirth: {
        type: DataTypes.DATE,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    // rolId: {}
})

Patient.hasMany(Consultation, {
    foreignKey: 'patientId',
    sourceKey: 'id'
});

Consultation.belongsTo(Patient, {
    foreignKey: 'patientId',
    targetId: 'id'
});

module.exports = Patient;