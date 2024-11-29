const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');

const Admin = conn.define('admin', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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

module.exports = Admin;