import { useState } from 'react'

import styles from './Configuracion.module.css'
import ConfiguracionHeader from '../../component/Medic/configuracion/ConfiguracionHeader/ConfiguracionHeader'
import ConfiguracionCuenta from '../../component/Medic/configuracion/ConfiguracionCuenta/ConfiguracionCuenta'
import ConfiguracionPreferencias from '../../component/Medic/configuracion/ConfiguracionPreferencias/ConfiguracionPreferencias'
import ConfiguracionNotificaciones from '../../component/Medic/configuracion/ConfiguracionNotificaciones/ConfiguracionNotificaciones'
import ConfiguracionPerfil from '../../component/Medic/configuracion/ConfiguracionPerfil/ConfiguracionPerfil'
// 

// 

const Configuracion = () => {
  // esto sirve para que el usuario pueda cambiar el tema de la aplicación
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={styles.ConfiguracionContainer}>
      <ConfiguracionHeader />

      <div className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <ConfiguracionPerfil />

          <ConfiguracionCuenta />

          <ConfiguracionPreferencias
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <ConfiguracionNotificaciones />
        </div>
      </div>
    </div>
  )
}

export default Configuracion
