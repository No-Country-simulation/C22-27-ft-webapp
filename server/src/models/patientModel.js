const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');

const Patient =  conn.define('patient',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
    }
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