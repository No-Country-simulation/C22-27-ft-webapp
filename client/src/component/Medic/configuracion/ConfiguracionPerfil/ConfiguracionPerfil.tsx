import { useEffect, useState } from 'react';
import { doctorDashboardApi } from '../../../../APIs/doctor/dashboard.api';
import styles from './ConfiguracionPerfil.module.css'
import { FiCamera, FiEdit, FiUser } from 'react-icons/fi'
import { useAuthStore } from '../../../../store/useAuth';
import { useNavigate } from 'react-router-dom';

const ConfiguracionPerfil = () => {
  // 
  const { user } = useAuthStore();
  
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
        <FiUser className={styles.cardIcon} />
        <div>
          <h2>Perfil</h2>
          <p>Información personal y profesional</p>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.avatarSection}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatarImage}>DR</div>
            <div className={styles.avatarOverlay}>
              <FiCamera className={styles.avatarIcon} />
            </div>
          </div>
          <button className={styles.actionButton}>
            <FiEdit /> Cambiar Avatar
          </button>
        </div>
        <div className={styles.formGroup}>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            defaultValue={user?.username}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            defaultValue={user?.username}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Rol</label>
          <input
            type="text"
            className="form-control"
            defaultValue={user?.role}
            readOnly
          />
          <span className={styles.badge}>Verificado</span>
        </div>
      </div>
    </div>
  )
}

export default ConfiguracionPerfil
