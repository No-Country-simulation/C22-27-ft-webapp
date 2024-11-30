import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboardPaciente.module.css";
import {
  RiCalendarLine,
  RiStethoscopeLine,
  RiMedicineBottleLine,
  RiTimeLine,
  RiUserHeartLine,
  RiPulseLine,
  RiFileListLine,
  RiRunLine,
  RiMoonLine,
  RiHeartLine,
  RiCalendarCheckLine,
  RiStarLine,
  RiBellLine,
  RiHospitalLine,
  RiHeartPulseLine,
} from "react-icons/ri";
import { useAuthStore } from "../../store/useAuth";

const DashboardPaciente = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalAppointments: 8,
    activePrescriptions: 3,
    newResults: 2,
    healthScore: 85,
  });

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      datetime: new Date(2024, 0, 15, 14, 30),
      doctor: {
        name: "Dr. Juan Pérez",
        specialty: "Medicina General",
      },
      type: "virtual",
      status: "confirmed",
    },
    {
      id: 2,
      datetime: new Date(2024, 0, 20, 10, 0),
      doctor: {
        name: "Dra. Ana García",
        specialty: "Cardiología",
      },
      type: "presencial",
      status: "pending",
    },
  ]);

  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Cada 8 horas",
      nextDose: "Hoy 14:00",
      remainingDoses: 6,
    },
    {
      id: 2,
      name: "Omeprazol",
      dosage: "20mg",
      frequency: "Una vez al día",
      nextDose: "Mañana 08:00",
      remainingDoses: 15,
    },
    {
      id: 3,
      name: "Vitamina D",
      dosage: "2000 UI",
      frequency: "Una vez al día",
      nextDose: "Hoy 20:00",
      remainingDoses: 28,
    },
  ]);

  const healthTips = [
    {
      icon: <RiHeartLine />,
      title: "Ejercicio Diario",
      description: "30 minutos de actividad física moderada mejoran tu salud cardiovascular.",
    },
    {
      icon: <RiMoonLine />,
      title: "Descanso Adecuado",
      description: "Dormir 7-8 horas fortalece tu sistema inmunológico y mejora tu bienestar.",
    },
    {
      icon: <RiRunLine />,
      title: "Mantente Activo",
      description: "Realiza pausas activas durante tu jornada para mantener una buena circulación.",
    },
  ];

  useEffect(() => {
    // Simulando carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Cargando tu información médica...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>¡Bienvenido, {user?.username}! 👋</h1>
          <p className={styles.subtitle}>
            Mantén el control de tu salud y bienestar. Estamos aquí para ayudarte.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.actionButton}>
            <RiBellLine /> Notificaciones
          </button>
          <button className={styles.actionButton}>
            <RiUserHeartLine /> Mi Perfil
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.statBlue}`}>
          <div className={styles.statIcon}>
            <RiCalendarCheckLine />
          </div>
          <div className={styles.statInfo}>
            <div className={styles.statValue}>{stats.totalAppointments}</div>
            <div className={styles.statLabel}>Citas Programadas</div>
            <div className={styles.statTrend}>+2 esta semana</div>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.statPurple}`}>
          <div className={styles.statIcon}>
            <RiMedicineBottleLine />
          </div>
          <div className={styles.statInfo}>
            <div className={styles.statValue}>{stats.activePrescriptions}</div>
            <div className={styles.statLabel}>Medicamentos Activos</div>
            <div className={styles.statTrend}>Actualizado hoy</div>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.statGreen}`}>
          <div className={styles.statIcon}>
            <RiHeartPulseLine />
          </div>
          <div className={styles.statInfo}>
            <div className={styles.statValue}>{stats.healthScore}</div>
            <div className={styles.statLabel}>Índice de Salud</div>
            <div className={styles.statTrend}>↑ 5% este mes</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainGrid}>
        {/* Próximas Citas */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <RiCalendarLine /> Próximas Citas
            </h2>
            <button className={styles.sectionAction}>Ver todas</button>
          </div>
          <div className={styles.appointmentsList}>
            {appointments.map((appointment, index) => (
              <div key={index} className={styles.appointmentCard}>
                <div className={styles.appointmentHeader}>
                  <span className={`${styles.appointmentType} ${styles[appointment.type]}`}>
                    {appointment.type === 'virtual' ? '🖥 Virtual' : '🏥 Presencial'}
                  </span>
                  <span className={`${styles.appointmentStatus} ${styles[appointment.status]}`}>
                    {appointment.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                  </span>
                </div>
                <div className={styles.appointmentInfo}>
                  <div className={styles.appointmentDoctor}>
                    {appointment.doctor.name}
                  </div>
                  <div className={styles.appointmentSpecialty}>
                    {appointment.doctor.specialty}
                  </div>
                  <div className={styles.appointmentDateTime}>
                    <RiTimeLine />
                    {appointment.datetime.toLocaleDateString()} - {" "}
                    {appointment.datetime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
                <div className={styles.appointmentActions}>
                  <button className={styles.appointmentButton}>
                    Ver detalles
                  </button>
                  {appointment.type === 'virtual' && (
                    <button className={`${styles.appointmentButton} ${styles.primaryButton}`}>
                      Unirse a consulta
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Medicamentos */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <RiMedicineBottleLine /> Medicamentos Activos
            </h2>
            <button className={styles.sectionAction}>Ver todos</button>
          </div>
          <div className={styles.medicationsList}>
            {medications.map((medication, index) => (
              <div key={index} className={styles.medicationCard}>
                <div className={styles.medicationMain}>
                  <div className={styles.medicationIcon}>
                    <RiMedicineBottleLine />
                  </div>
                  <div className={styles.medicationInfo}>
                    <h3 className={styles.medicationName}>{medication.name}</h3>
                    <p className={styles.medicationDosage}>{medication.dosage} - {medication.frequency}</p>
                  </div>
                </div>
                <div className={styles.medicationDetails}>
                  <div className={styles.medicationNextDose}>
                    <RiTimeLine />
                    Próxima dosis: {medication.nextDose}
                  </div>
                  <div className={styles.medicationRemaining}>
                    Dosis restantes: {medication.remainingDoses}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consejos de Salud */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <RiHeartLine /> Consejos de Salud
            </h2>
            <button className={styles.sectionAction}>Más consejos</button>
          </div>
          <div className={styles.healthTipsList}>
            {healthTips.map((tip, index) => (
              <div key={index} className={styles.healthTipCard}>
                <div className={styles.healthTipIcon}>{tip.icon}</div>
                <div className={styles.healthTipContent}>
                  <h3 className={styles.healthTipTitle}>{tip.title}</h3>
                  <p className={styles.healthTipDescription}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPaciente;