import { useEffect, useState } from 'react';
import { useAuthStore } from '../../../../store/useAuth';
import styles from './ConfiguracionCuenta.module.css'
import { FiLock, FiMail } from 'react-icons/fi'
import { doctorDashboardApi } from "../../../../APIs/doctor/dashboard.api";
import {
  DoctorStats,
  NextPatientDetails,
} from "../../../../mock/doctor/dashboard.mock";
import { Appointment } from "../../../../mock/doctor/dashboard.mock";
import { useNavigate } from "react-router-dom";

const ConfiguracionCuenta = () => {
  // 
  const { user } = useAuthStore();
  const [stats, setStats] = useState<DoctorStats | null>(null);
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);
  const [nextPatient, setNextPatient] = useState<NextPatientDetails | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [activeFilter, setActiveFilter] = useState("todas");

  const navigate = useNavigate();
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [stats, appointments, nextPatient] = await Promise.all([
          doctorDashboardApi.getDoctorStats(),
          doctorDashboardApi.getDayliAppointments(),
          doctorDashboardApi.getNextPatientDetails(),
        ]);
        setStats(stats);
        setAppointments(appointments);
        setNextPatient(nextPatient);
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboardData();
  }, []);
  // 
  return (
    <div className={styles.configCard}>
      <div className={styles.cardHeader}>
        <FiMail className={styles.cardIcon} />
        <div>
          <h2>Cuenta</h2>
          <p>Email y seguridad</p>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.formGroup}>
          <label>Email Principal</label>
          <input
            type="email"
            className="form-control"
            defaultValue={user?.email}
            readOnly
            disabled
          />
          <span className={styles.badge}>Institucional</span>
        </div>
        <div className={styles.formGroup}>
          <label>Email Secundario</label>
          <input
            type="email"
            className="form-control"
            defaultValue="juan.rodriguez@email.com"
          />
        </div>
        <button className={styles.actionButton}>
          <FiLock /> Cambiar Contraseña
        </button>
      </div>
    </div>
  )
}

export default ConfiguracionCuenta
