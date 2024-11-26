const sequelize = require('../db/DB_connection');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    }, 
    {
        timestamps: true,
    }
);

User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: 'rol_id', as: 'role', onDelete: 'SET NULL' });
    User.hasOne(models.Medic, { foreignKey: 'usuario_id', as: 'medico' });
    User.hasOne(models.Pacient, { foreignKey: 'usuario_id', as: 'paciente' });
    User.hasOne(models.Administrator, { foreignKey: 'usuario_id', as: 'administrador' });
    User.hasMany(models.Notification, { foreignKey: 'usuario_id', as: 'notificaciones' });
};

module.exports = User