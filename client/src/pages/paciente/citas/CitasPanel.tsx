import { useEffect, useState } from 'react'
import styles from './CitasPanel.module.css'
import Spinner from './../../../components/common/Spinner/Spinner'
import {
  Cita,
  citasPacientesMock,
  CitaActualizada,
} from '../../../mock/patient/citas.mock'
import CitasPacientesHeader from '../../../components/Pacientes/Citas/CitasPacientesHeader/CitasPacientesHeader'
import CitasPacientesStats from '../../../components/Pacientes/Citas/CitasPacientesStats/CitasPacientesStats'
import CitasPacientesFilter from '../../../components/Pacientes/Citas/CitasPacientesFilter/CitasPacientesFilter'
import CitaPacienteTarjeta from '../../../components/Pacientes/Citas/CitaPacienteTarjeta/CitaPacienteTarjeta'

const CitasPanel = () => {

  const [loading, setLoading] = useState(true)
  const [citas, setCitas] = useState<Cita[]>([])
  const [citaSeleccionada, setCitaSeleccionada] = useState<number | null>(null)


  useEffect(() => {
    const cargarCitas = () => {
      setTimeout(() => {
        setCitas(citasPacientesMock)
        setLoading(false)
      }, 1000)
    }
    cargarCitas()
  }, [])

  if (loading) {
    return <Spinner text="Cargando citas... " />
  }
  return (
    <div className={styles.contenedor}>
      <CitasPacientesHeader />
      <CitasPacientesStats />
      <CitasPacientesFilter 
        onFiltrosChange={(citas) => setCitas(citas)}
        citasOriginales={citasPacientesMock}
      />
      <div className={styles.gridCitas}>
        {citas.map((cita) => (
          <CitaPacienteTarjeta
            key={cita.id}
            cita={cita}
            seleccionada={citaSeleccionada === cita.id}
            onSeleccionar={() => setCitaSeleccionada(citaSeleccionada === cita.id ? null : cita.id)}
            onReprogramar={(citaActualizada: CitaActualizada) => {
              
              // mensaje a consola con los datos de la cita actualizada
              console.log('Cita reprogramada:', citaActualizada);
              // crear en el futuro
              // actualizarCita(citaActualizada);
            }}
            />
        ))}
      </div>
    </div>
  )
}

export default CitasPanel
