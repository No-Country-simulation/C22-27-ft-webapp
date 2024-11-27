import { mockLoginService } from "../mock/login.mock";
import api from './interceptors';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

const useMock = import.meta.env.VITE_USE_MOCK === "true";
console.log('useMock', useMock);
console.log('apiUrl', import.meta.env.VITE_API_URL, import.meta.env.VITE_USE_MOCK);
export const authApi = {
  login: async (request: LoginRequest): Promise<AuthResponse> => {
    if (useMock) {
        console.log('usando mock');
      return mockLoginService.login(request.email, request.password);
    }
    console.log('usando api');
    const response = await api.post<AuthResponse>("/auth/login", request);
    return response.data;
  },
};
