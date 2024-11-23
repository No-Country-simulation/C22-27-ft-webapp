const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');
const Consultation = require('./consultaModel');

const Doctor = conn.define('doctor', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },

    // userId: {},

    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    },

    numberDoctor: {
      type: DataTypes.STRING,
    }

    // rolId: {}
})

Doctor.hasMany(Consultation, {
    foreignKey: 'doctorId',
    sourceKey: 'id'
});

Consultation.belongsTo(Doctor, {
    foreignKey: 'doctorId',
    targetId: 'id'
})

module.exports = Doctor;