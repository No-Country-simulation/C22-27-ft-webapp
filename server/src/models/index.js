const { conn } = require('../db/DB_connection.js');
const Doctor = require('./doctorModel.js');
const Patient = require('./patientModel.js');
const MedicalHistory = require('./medicalHistory.js');
const Notification = require('./notifications.js');
const Consultation = require('./consultaModel.js');

// Relación directa de Sequelize con los modelos definidos
const models = {
    Doctor,
    Patient,
    MedicalHistory,
    Notification,
    Consultation,
};

// Relaciones entre modelos

// MedicalHistory con Patient, Doctor y Consultation
Patient.hasOne(MedicalHistory, {foreignKey: 'medicalHistoryId'});
MedicalHistory.belongsTo(Patient, { foreignKey: 'patientId' });

Consultation.hasMany(MedicalHistory, {foreignKey: 'medicalHistoryId'})
MedicalHistory.belongsTo(Consultation, {foreignKey: 'consultationId'})

// Consultation con Patient y Doctor
Patient.hasMany(Consultation, { foreignKey: 'consultationId' });
Consultation.belongsTo(Patient, { foreignKey: 'patientId' });

Doctor.hasMany(Consultation, { foreignKey: 'consultationId' });
Consultation.belongsTo(Doctor, { foreignKey: 'doctorId' });

// Consultation con Notification
Consultation.hasOne(Notification, { foreignKey: 'consultationId' });
Notification.belongsTo(Consultation, { foreignKey: 'consultationId' });

// Exporta la conexión y los modelos
module.exports = { conn, ...models };
