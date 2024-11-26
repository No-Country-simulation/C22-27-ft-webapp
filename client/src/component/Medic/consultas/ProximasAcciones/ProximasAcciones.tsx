import styles from './ProximasAcciones.module.css';

interface AccionPendiente {
    id: number;
    paciente: string;
    tipo: 'llamada' | 'seguimiento' | 'urgente';
    fecha: string;
    hora: string;
    descripcion: string;
  }
  
  const ProximasAcciones = () => {
    const acciones: AccionPendiente[] = [
      {
        id: 1,
        paciente: "Roberto Méndez",
        tipo: "urgente",
        fecha: "Hoy",
        hora: "15:00",
        descripcion: "Confirmación de resultados"
      },
      {
        id: 2,
        paciente: "Laura Torres",
        tipo: "seguimiento",
        fecha: "Mañana",
        hora: "10:30",
        descripcion: "Revisión de tratamiento"
      },
      {
        id: 3,
        paciente: "Miguel Ruiz",
        tipo: "llamada",
        fecha: "Hoy",
        hora: "16:15",
        descripcion: "Resultados críticos"
      }
    ];
  
    return (
      <div className={styles.panel}>
        <h3 className={styles.titulo}>Próximas Acciones</h3>
        <div className={styles.lista}>
          {acciones.map((accion) => (
            <div key={accion.id} className={styles.accionItem}>
              <div className={styles.tiempo}>
                <span className={styles.fecha}>{accion.fecha}</span>
                <span className={styles.hora}>{accion.hora}</span>
              </div>
              <div className={styles.contenido}>
                <div className={styles.headerAccion}>
                  <h4 className={styles.paciente}>{accion.paciente}</h4>
                  <span className={`${styles.badge} ${styles[`badge${accion.tipo}`]}`}>
                    {accion.tipo}
                  </span>
                </div>
                <p className={styles.descripcion}>{accion.descripcion}</p>
              </div>
              <button className={styles.completarBtn}>
                Completar
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProximasAcciones;