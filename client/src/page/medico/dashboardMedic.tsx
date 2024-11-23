import { useState } from 'react';
import { 
  FiClock, FiCalendar, FiUser, FiVideo, FiActivity,
  FiCheck, FiHeart, FiThermometer, FiClipboard,
  FiTrendingUp, FiDollarSign, FiUsers, FiAlertCircle,
  FiPieChart, FiFileText, FiMessageSquare
} from 'react-icons/fi';
import { RiStethoscopeLine, RiVirusLine, RiMentalHealthLine, RiHospitalLine } from 'react-icons/ri';
import styles from './dashboardMedic.module.css';

const DashboardMedic = () => {
  const [activeFilter, setActiveFilter] = useState('todas');

  const citas = [
    {
      id: 1,
      paciente: "María González",
      hora: "09:00 AM",
      tipo: "Consulta General",
      estado: "confirmada",
      isVirtual: true,
      sintomas: "Dolor de cabeza, fiebre"
    },
    {
      id: 2,
      paciente: "Juan Pérez",
      hora: "10:30 AM",
      tipo: "Seguimiento",
      estado: "pendiente",
      isVirtual: false,
      sintomas: "Control post-operatorio"
    },
    {
      id: 3,
      paciente: "Ana López",
      hora: "11:45 AM",
      tipo: "Primera Visita",
      estado: "confirmada",
      isVirtual: true,
      sintomas: "Dolor abdominal"
    },
    {
      id: 4,
      paciente: "Carlos Ruiz",
      hora: "14:15 PM",
      tipo: "Emergencia",
      estado: "urgente",
      isVirtual: false,
      sintomas: "Presión arterial alta"
    }
  ];

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>¡Buen día, Dr. Rodríguez!</h1>
          <p className={styles.welcomeText}>
            <FiCalendar className={styles.icon} /> 
            Martes, 12 de Marzo • 8 citas programadas
          </p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.miniStat}>
            <FiUsers /> 
            <span>125 Pacientes este mes</span>
          </div>
          <div className={styles.miniStat}>
            <FiDollarSign />
            <span>98% Satisfacción</span>
          </div>
          <div className={`${styles.tag} ${styles.online}`}>
            <span className={styles.onlineDot}></span>
            En línea
          </div>
        </div>
      </header>

      <div className={styles.quickActions}>
        <button className={styles.actionButton}>
          <RiStethoscopeLine />
          Nueva Consulta
        </button>
        <button className={styles.actionButton}>
          <FiClipboard />
          Historial Médico
        </button>
        <button className={styles.actionButton}>
          <FiHeart />
          Recetas
        </button>
        <button className={styles.actionButton}>
          <FiActivity />
          Laboratorio
        </button>
        <button className={styles.actionButton}>
          <RiHospitalLine />
          Hospitalización
        </button>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUser />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Pacientes Hoy</span>
            <h3 className={styles.statValue}>8</h3>
            <p className={styles.statTrend}>
              <FiTrendingUp />
              <span>+12% vs ayer</span>
            </p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiVideo />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Consultas Virtuales</span>
            <h3 className={styles.statValue}>5</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{width: '62.5%'}}></div>
            </div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiPieChart />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Eficiencia</span>
            <h3 className={styles.statValue}>94%</h3>
            <p className={styles.statDetail}>+5% este mes</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiMessageSquare />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Consultas Pendientes</span>
            <h3 className={styles.statValue}>3</h3>
            <p className={styles.statDetail}>2 urgentes</p>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.appointmentsList}>
          <div className={styles.sectionHeader}>
            <h2>Próximas Consultas</h2>
            <div className={styles.filterTags}>
              {['todas', 'virtuales', 'presenciales', 'urgentes'].map(filter => (
                <button 
                  key={filter}
                  className={`${styles.filterTag} ${activeFilter === filter ? styles.active : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {citas.map((cita) => (
            <div key={cita.id} className={styles.appointment}>
              <div className={styles.appointmentTime}>
                <FiClock />
                {cita.hora}
              </div>
              <div className={styles.patientAvatar}>
                {cita.paciente.split(' ').map(n => n[0]).join('')}
              </div>
              <div className={styles.appointmentInfo}>
                <h3>{cita.paciente}</h3>
                <p>{cita.tipo}</p>
                <p className={styles.symptoms}>
                  <FiAlertCircle />
                  {cita.sintomas}
                </p>
              </div>
              <div className={`${styles.tag} ${styles[cita.estado]}`}>
                {cita.isVirtual && <FiVideo />}
                {cita.estado}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.patientInfo}>
            <h2>Próximo Paciente</h2>
            <div className={styles.currentPatient}>
              <div className={styles.patientHeader}>
                <div className={styles.patientAvatar}>MG</div>
                <div>
                  <h3>María González</h3>
                  <p>
                    <FiVideo />
                    Consulta General • 09:00 AM
                  </p>
                </div>
              </div>
              
              <div className={styles.patientDetails}>
                <div className={styles.detailItem}>
                  <span>Última visita</span>
                  <strong>15 Feb 2024</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Alergias</span>
                  <strong>Penicilina</strong>
                </div>
                <div className={styles.detailItem}>
                  <span>Grupo Sanguíneo</span>
                  <strong>O+</strong>
                </div>
              </div>

              <div className={styles.vitalSigns}>
                <div className={styles.vitalSign}>
                  <FiThermometer />
                  <span>Temperatura</span>
                  <strong>36.5°C</strong>
                </div>
                <div className={styles.vitalSign}>
                  <FiActivity />
                  <span>Presión</span>
                  <strong>120/80</strong>
                </div>
                <div className={styles.vitalSign}>
                  <RiVirusLine />
                  <span>PCR</span>
                  <strong>Negativo</strong>
                </div>
              </div>

              <div className={styles.notes}>
                <h4>Historial Reciente</h4>
                <ul>
                  <li>Control de presión arterial mensual</li>
                  <li>Análisis de sangre pendiente</li>
                  <li>Actualización de medicamentos</li>
                  <li>Seguimiento tratamiento crónico</li>
                </ul>
              </div>

              <div className={styles.medications}>
                <h4>Medicamentos Actuales</h4>
                <div className={styles.medicationList}>
                  <div className={styles.medication}>
                    <FiFileText />
                    <div>
                      <h5>Enalapril 10mg</h5>
                      <p>1 tableta cada 24 horas</p>
                    </div>
                  </div>
                  <div className={styles.medication}>
                    <FiFileText />
                    <div>
                      <h5>Aspirina 81mg</h5>
                      <p>1 tableta cada 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMedic;
