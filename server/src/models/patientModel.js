const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const Consultation = require('./consultaModel.js');

const Patient =  conn.define('patient',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },

    rol: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
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
})

Patient.hasOne(Consultation, {
    foreignKey: 'patientId',
    sourceKey: 'id'
});

Consultation.belongsTo(Patient, {
    foreignKey: 'patientId',
    targetId: 'id'
});



module.exports = Patient;