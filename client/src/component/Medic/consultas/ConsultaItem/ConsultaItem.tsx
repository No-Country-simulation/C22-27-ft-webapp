import { FiCheck, FiAlertCircle, FiPhoneCall, FiMail, FiCalendar } from 'react-icons/fi';
import styles from './consultaItem.module.css';

interface ConsultaItemProps {
  consulta: {
    id: number;
    paciente: string;
    telefono: string;
    email: string;
    tipo: string;
    fechaSolicitud: string;
    especialidad: string;
    prioridad: string;
    motivo: string;
    horarioPreferido: string;
    tiempoEspera: string;
  };
}

const ConsultaItem = ({ consulta }: ConsultaItemProps) => {
  const initials = consulta.paciente
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className={styles.consultaItem}>
      <div className={styles.pacienteHeader}>
        <div className={styles.pacienteIcon}>{initials}</div>
        <div className={styles.pacienteInfo}>
          <div className={styles.pacienteNombre}>
            <span className={styles.nombreTexto}>{consulta.paciente}</span>
            <span className={`${styles.statusBadge} ${styles[consulta.prioridad]}`}>
              {consulta.prioridad}
            </span>
          </div>
          <div className={styles.especialidadTexto}>
            {consulta.especialidad} - {consulta.tipo}
          </div>
          <div className={styles.symptoms}>
            {/* motivo, modificar segun el tipo de consulta */}
            <FiAlertCircle />
            {consulta.motivo}
          </div>
          <div className={styles.consultaMetadata}>
            <div className={styles.metadataRow}>
              <FiCalendar />
              <span>Solicitado: {consulta.fechaSolicitud}</span>
              <span className={styles.preferencia}>
                Preferencia: {consulta.horarioPreferido}
              </span>
            </div>
            <div className={styles.metadataRow}>
              <FiPhoneCall />
              <span>{consulta.telefono}</span>
            </div>
            <div className={styles.metadataRow}>
              <FiMail />
              <span>{consulta.email}</span>
            </div>
          </div>
        </div>
        <div className={styles.consultaActions}>
          <button className={`${styles.btnGeneral} ${styles.btnAsignar}`}>
            <FiCheck /> Asignar
          </button>
          <button className={`${styles.btnGeneral} ${styles.btnLlamar}`}>
            <FiPhoneCall /> Llamar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultaItem;