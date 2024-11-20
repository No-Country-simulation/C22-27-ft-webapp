
export interface User {
    email: string;
    password: string;
  }
  
  export class UserManager {
    private static USERS_KEY = 'localUsers';
  
    static initializeDefaultUsers(): void {
      const users = this.getUsers();
      if (users.length === 0) {
        const defaultUsers: User[] = [
          { email: 'gianellaachetoni@gmail.com', password: '123456' },
          { email: 'admin@hospitalpepe.com', password: 'admin123' }
        ];
        this.saveUsers(defaultUsers);
      }
    }
  
    static getUsers(): User[] {
      const usersJSON = localStorage.getItem(this.USERS_KEY);
      try {
        return usersJSON ? JSON.parse(usersJSON) : [];
      } catch {
        console.error('Error al parsear los usuarios de localStorage');
        return [];
      }
    }
  
    static saveUsers(users: User[]): void {
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }
  
    static authenticateUser(email: string, password: string): boolean {
      const users = this.getUsers();
      return users.some(user => user.email === email && user.password === password);
    }
  }