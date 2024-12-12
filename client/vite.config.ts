import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Permite conexiones externas
    port: 4173, // Asegúrate de usar el puerto que espera Railway
  },
})
