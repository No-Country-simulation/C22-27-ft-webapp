import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Hash de la contraseña
  status: string;
  token: string | null;
  refreshToken: string | null;
  createdAt: string;
  updatedAt: string;
}

interface UserStore {
  users: User[];
  currentUser: User | null;
  initializeUsers: (jsonUsers: User[]) => void;
  authenticateUser: (email: string, password: string) => string | null; // Devuelve un token si es válido
  logoutUser: () => void;
  getUserByToken: (token: string) => User | null;
}

const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  currentUser: null,

  // Inicializa la lista de usuarios con datos del JSON
  initializeUsers: (jsonUsers: User[]) => {
    set({ users: jsonUsers });
  },

  // Autentica al usuario verificando el correo y contraseña
  authenticateUser: (email, password) => {
    const users = get().users;
    const user = users.find((u) => u.email === email && u.status === 'active');

    if (user) {
      // Simula la verificación del hash de la contraseña
      if (password === user.password) {
        set({ currentUser: user });
        return user.token || null; // Devuelve el token si existe
      }
    }
    return null; // Retorna null si las credenciales no son válidas
  },

  // Cierra sesión eliminando el usuario actual
  logoutUser: () => {
    set({ currentUser: null });
  },

  // Obtiene un usuario basado en el token
  getUserByToken: (token) => {
    const users = get().users;
    return users.find((user) => user.token === token) || null;
  },
}));

export default useUserStore;
