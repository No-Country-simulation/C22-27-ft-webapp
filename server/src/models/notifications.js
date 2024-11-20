const { DataTypes } = require('sequelize');
const {conn}=require('../db/DB_connection')
//const Usuario = require('./Usuarios'); 

const Notificacion = conn.define('Notificacion', {
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
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  enviado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  tableName: 'notificaciones',
});

module.exports = Notificacion;
