import { BackendRole } from './role.models';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: BackendRole;
  enabled: boolean;
  createdAt: string;
}

export interface AuthResponse {
  tokenType: string;
  accessToken: string;
  expiresInSeconds: number;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  fullName: string;
  role: BackendRole;
}
