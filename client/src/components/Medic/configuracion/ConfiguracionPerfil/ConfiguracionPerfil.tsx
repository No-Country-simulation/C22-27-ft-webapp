import styles from './ConfiguracionPerfil.module.css'
import { FiCamera, FiEdit, FiUser } from 'react-icons/fi'
import { useAuthStore } from '../../../../store/useAuth';

const ConfiguracionPerfil = () => {
  // 
  const { user } = useAuthStore();
  
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
        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              defaultValue={user?.firstName}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              defaultValue={user?.lastName}
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
    </div>
  )
}

export default ConfiguracionPerfil
