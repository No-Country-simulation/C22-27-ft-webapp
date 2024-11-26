const sequelize = require('../db/DB_connection');
const Role = require('./Role');
const User = require('./User');
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const Administrator = require('./Administrator');
const Appointment = require('./Appointment');
const Prescription = require('./Prescription');
const MedicalHistory = require('./MedicalHistory');
const Notification = require('./Notification');

// Import all models
const models = {
    Role,
    User,
    Doctor,
    Patient,
    Administrator,
    Appointment,
    Prescription,
    MedicalHistory,
    Notification,
};

// Initialize associations
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

User.hasOne(Doctor, { foreignKey: 'user_id' });
User.hasOne(Patient, { foreignKey: 'user_id' });
User.hasOne(Administrator, { foreignKey: 'user_id' });

Doctor.belongsTo(User, { foreignKey: 'user_id' });
Patient.belongsTo(User, { foreignKey: 'user_id' });
Administrator.belongsTo(User, { foreignKey: 'user_id' });

Appointment.belongsTo(User, { foreignKey: 'patient_id', as: 'patient' });
Appointment.belongsTo(User, { foreignKey: 'doctor_id', as: 'doctor' });

Prescription.belongsTo(Appointment, { foreignKey: 'appointment_id' });

MedicalHistory.belongsTo(User, { foreignKey: 'patient_id' });
MedicalHistory.belongsTo(Appointment, { foreignKey: 'appointment_id' });

Notification.belongsTo(User, { foreignKey: 'user_id' });

// Add models to Sequelize instance
Object.values(models).forEach((model) => {
    if (model.init) {
        model.init(sequelize);
    }
    if (model.associate) {
        model.associate(models);
    }
});

module.exports = { sequelize, ...models };
