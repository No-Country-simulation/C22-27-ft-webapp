import {
  RiVideoLine,
  RiHospitalLine,
  RiCalendarLine,
  RiTimeLine,
  RiStethoscopeLine,
  RiInformationLine,
  RiFileList3Line,
  RiCalendarEventLine,
} from 'react-icons/ri'
import { Cita, CitaActualizada } from '../../../../mock/paciente/citas.mock'
import styles from './CitaPacienteTarjeta.module.css'
import { useEffect, useState } from 'react'
import ReprogramarCitaModal from '../ReprogramarCitaModal/ReprogramarCitaModal'

interface TarjetaCitaProps {
  cita: Cita
  seleccionada: boolean
  onSeleccionar: () => void
  onReprogramar: (citaActualizada: CitaActualizada) => void
}

const CitaPacienteTarjeta = ({
  cita,
  seleccionada,
  onSeleccionar,
  onReprogramar,
}: TarjetaCitaProps) => {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [puedeUnirse, setPuedeUnirse] = useState(false)
  //
  // Función para verificar el tiempo
  const verificarTiempoCita = () => {
    const ahora = new Date()
    const fechaCita = new Date(cita.fecha)
    // Obtener tiempo en minutos para ambas fechas
    const tiempoActual = ahora.getHours() * 60 + ahora.getMinutes()
    const tiempoCita = fechaCita.getHours() * 60 + fechaCita.getMinutes()

    // Verificar si es el mismo día
    const esMismoDia =
      ahora.getDate() === fechaCita.getDate() &&
      ahora.getMonth() === fechaCita.getMonth() &&
      ahora.getFullYear() === fechaCita.getFullYear()

    // Diferencia en minutos
    const diferenciaMinutos = Math.abs(tiempoCita - tiempoActual)

    // Permitir unirse 5 minutos antes y hasta 20 minutos después
    return esMismoDia && diferenciaMinutos <= 20
  }

  useEffect(() => {
    // Verificación inicial
    setPuedeUnirse(verificarTiempoCita())

    // Actualizar cada minuto
    const interval = setInterval(() => {
      setPuedeUnirse(verificarTiempoCita())
    }, 60000)

    // Limpiar intervalo
    return () => clearInterval(interval)
  }, [cita.fecha])
  
  // reprogramar cita
  const handleReprogramar = (nuevaFecha: Date) => {
    if (onReprogramar) {
      const citaActualizada: CitaActualizada = {
        ...cita,
        fecha: nuevaFecha,
        estado: 'pendiente' as const,
      }
      onReprogramar(citaActualizada)
    }
  }

  return (
    <>
      <div
        className={`${styles.tarjetaCita} ${
          seleccionada ? styles.expandida : ''
        }`}
      >
        <div className={styles.contenidoCita}>
          <div className={styles.cabeceraTarjeta}>
            <span className={`${styles.badge} ${styles[`badge${cita.tipo}`]}`}>
              {cita.tipo === 'virtual' ? (
                <span className={styles.textoIcono}>
                  <RiVideoLine /> Virtual
                </span>
              ) : (
                <span className={styles.textoIcono}>
                  <RiHospitalLine /> Presencial
                </span>
              )}
            </span>
            <span
              className={`${styles.badge} ${styles[`badge${cita.estado}`]}`}
            >
              {cita.estado === 'confirmada' ? 'Confirmada' : 'Pendiente'}
            </span>
          </div>

          <div className={styles.infoDoctor}>
            <img
              src={cita.doctor.imagen}
              alt={cita.doctor.nombre}
              className={styles.imagenDoctor}
            />
            <div className={styles.datosDoctor}>
              <h3 className={styles.nombreDoctor}>{cita.doctor.nombre}</h3>
              <p className={styles.especialidadDoctor}>
                {cita.doctor.especialidad}
              </p>
            </div>
            {cita.notificaciones && (
              <span className={styles.notificacion}>{cita.notificaciones}</span>
            )}
          </div>

          <div className={styles.detallesCita}>
            <div className={styles.itemDetalle}>
              <RiCalendarLine />
              <span>{cita.fecha.toLocaleDateString()}</span>
            </div>
            <div className={styles.itemDetalle}>
              <RiTimeLine />
              <span>
                {cita.fecha.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
            <div className={styles.itemDetalle}>
              <RiStethoscopeLine />
              <span>{cita.ubicacion}</span>
            </div>
            <div className={styles.itemDetalle}>
              <RiInformationLine />
              <span>{cita.descripcion}</span>
            </div>
          </div>
        </div>

        {/* Panel expandible de detalles */}
        {cita.estado === 'confirmada' && cita.instrucciones && seleccionada && (
          <div className={styles.seccionInstrucciones}>
            <div className={styles.divisor} />
            <div className={styles.instruccionesTexto}>
              <RiFileList3Line /> {cita.instrucciones}
            </div>
          </div>
        )}

<div className={styles.contenedorAcciones}>
        {cita.estado === 'confirmada' ? (
          <>
            {puedeUnirse ? (
              <button className={styles.botonUnirse}>
                <RiVideoLine /> Unirse ahora
              </button>
            ) : (
              <button
                className={styles.botonReprogramar}
                onClick={() => setModalAbierto(true)}
              >
                <RiCalendarEventLine /> Reprogramar
              </button>
            )}
            {/* detalles */}
            <button
              className={`${styles.botonDetalle} ${seleccionada ? styles.activo : ''}`}
              onClick={onSeleccionar}
            >
              {seleccionada ? 'Ocultar detalles' : 'Ver detalles'}
            </button>
          </>
        ) : (
          <>
            <button className={styles.botonCancelar}>
              Cancelar
            </button>
            <button
              className={styles.botonReprogramar}
              onClick={() => setModalAbierto(true)}
            >
              <RiCalendarEventLine /> Reprogramar
            </button>
          </>
        )}
        </div>
      </div>
      <ReprogramarCitaModal
        cita={cita}
        modalAbierto={modalAbierto}
        onClose={() => setModalAbierto(false)}
        onSubmit={(nuevaFecha: Date) => handleReprogramar(nuevaFecha)}
      />
    </>
  )
}

export default CitaPacienteTarjeta
