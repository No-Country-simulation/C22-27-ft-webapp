const { DataTypes } = require('sequelize');
const { conn } = require('../db/DB_connection');

const User = conn.define('User', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    //   usuario_id: {
    //     type: DataTypes.BIGINT,
    //     allowNull: false,
    //     references: {
    //       model: Usuario,
    //       key: 'id',  
    //     },
    //   },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    hashpass: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    role: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: 'user',
});

module.exports = User;