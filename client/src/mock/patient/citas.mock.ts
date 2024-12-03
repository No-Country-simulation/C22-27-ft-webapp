// Interfaces
export interface Doctor {
  id: number
  nombre: string
  especialidad: string
  imagen: string
}

export interface Cita {
  id: number
  fecha: Date
  doctor: Doctor
  tipo: 'virtual' | 'presencial'
  estado: 'confirmada' | 'pendiente'
  descripcion: string
  ubicacion: string
  notificaciones?: number
  sintomas?: string
  instrucciones?: string
  archivosAdjuntos?: boolean
}

export interface FormData {
  tipo: 'virtual' | 'presencial'
  especialidad: string
  doctor: Doctor | undefined
  fecha: string
  hora: string
  motivo: string
  ubicacion: string
}

export interface EstadisticasCitas {
  total: number;
  virtuales: number;
  presenciales: number;
  confirmadas: number;
  pendientes: number;
}

export interface CitaActualizada extends Pick<Cita, 'id' | 'doctor' | 'tipo' | 'descripcion' | 'ubicacion'> {
  fecha: Date
  estado: 'pendiente'
}
// 
export const estadisticasCitasMock: EstadisticasCitas = {
  total: 5, 
  virtuales: 2, 
  presenciales: 3, 
  confirmadas: 3, 
  pendientes: 2 
};

export const citasPacientesMock: Cita[] = [
  {
    id: 1,
    fecha: new Date,
    doctor: {
      id: 1,
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Medicina General',
      imagen:
        'https://www.sopitas.com/wp-content/uploads/2020/10/meme-el-pepe-ete-sech-origen.png',
    },
    tipo: 'virtual',
    estado: 'confirmada',
    descripcion: 'Control mensual',
    ubicacion: 'Consulta Virtual',
    notificaciones: 1,
    instrucciones: 'Tener los últimos exámenes a mano',
  },
  
  {
    id: 2,
    fecha: new Date(2024, 11, 13, 18, 30),
    doctor: {
      id: 2,
      nombre: 'Dr. Carlos Ruiz',
      especialidad: 'Traumatología',
      imagen:
        'https://www.sopitas.com/wp-content/uploads/2020/10/meme-el-pepe-ete-sech-origen.png',
    },
    tipo: 'presencial',
    estado: 'confirmada',
    descripcion: 'Revisión de rodilla',
    ubicacion: 'Consultorio 205',
    notificaciones: 1,
    instrucciones: 'Traer radiografías previas',
  },
  
  {
    id: 3,
    fecha: new Date(2024, 0, 18, 16, 15),
    doctor: {
      id: 3,
      nombre: 'Dr. Roberto Sánchez',
      especialidad: 'Oftalmología',
      imagen:
        'https://www.sopitas.com/wp-content/uploads/2020/10/meme-el-pepe-ete-sech-origen.png',
    },
    tipo: 'presencial',
    estado: 'pendiente',
    descripcion: 'Control anual de vista',
    ubicacion: 'Consultorio 102',
  },
]
// Doctores
export const doctoresMock: Doctor[] = [
  {
    id: 1,
    nombre: 'Dr. Juan Pérez',
    especialidad: 'Medicina General',
    imagen: 'https://www.sopitas.com/wp-content/uploads/2020/10/meme-el-pepe-ete-sech-origen.png'
  },
  {
    id: 2,
    nombre: 'Dr. Carlos Ruiz',
    especialidad: 'Traumatología',
    imagen: 'https://www.sopitas.com/wp-content/uploads/2020/10/meme-el-pepe-ete-sech-origen.png'
  },
  {
    id: 3,
    nombre: 'Dr. Roberto Sánchez',
    especialidad: 'Oftalmología',
    imagen: 'https://www.sopitas.com/wp-content/uploads/2020/10/meme-el-pepe-ete-sech-origen.png'
  }
];