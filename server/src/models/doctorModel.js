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

    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    },

    numberDoctor: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    }

    // rolId: {}
})

Doctor.hasOne(Consultation, {
    foreignKey: 'doctorId',
    sourceKey: 'id'
});

Consultation.belongsTo(Doctor, {
    foreignKey: 'doctorId',
    targetId: 'id'
})

module.exports = Doctor;