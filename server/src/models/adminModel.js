const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');

const Admin = conn.define('admin', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
})

module.exports = Admin;