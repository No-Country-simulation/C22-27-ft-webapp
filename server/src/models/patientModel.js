const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const Consultation = require('./consultaModel');

const Patient = conn.define('patient',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },

    // userId: {},

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    dateBirth: {
        type: DataTypes.DATE,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

    // rolId: {}
})

Patient.hasOne(Consultation, {
    foreignKey: 'patientId',
    sourceKey: 'id'
});

const belongs = Consultation.belongsTo(Patient, {
    foreignKey: 'patientId',
    targetId: 'id'
});

module.exports = Patient;