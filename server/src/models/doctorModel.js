const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const Consultation = require('./consultaModel');

const Doctor = conn.define('doctor', {
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

    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    },

    numberDoctor: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    }
})

Doctor.hasOne(Consultation, {
    foreignKey: 'doctorId',
    sourceKey: 'id'
});

Consultation.belongsTo(Doctor, {
    foreignKey: 'doctorId',
    targetId: 'id',
    allowNull: false
})

module.exports = Doctor;