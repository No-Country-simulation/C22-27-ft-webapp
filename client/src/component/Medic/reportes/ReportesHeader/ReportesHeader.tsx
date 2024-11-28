import { FiBell,} from 'react-icons/fi'
import styles from './ReportesHeader.module.css'

const ReportesHeader = () => {
  return (
    <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Reportes</h1>
          <p className={styles.welcomeText}>
            <FiBell /> 
            Centro de notificaciones y reportes del sistema
          </p>
        </div>
      </header>
  )
}

export default ReportesHeader
