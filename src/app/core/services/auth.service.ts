import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { AuthResponse, LoginRequest, RegisterRequest, User } from '../models/auth.models';
import { BackendRole } from '../models/role.models';
import { ApiService } from './api.service';

const TOKEN_KEY = 'bankops.token';
const USER_KEY = 'bankops.user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userSubject = new BehaviorSubject<User | null>(this.readUser());
  readonly user$ = this.userSubject.asObservable();

  constructor(
    private readonly api: ApiService,
    private readonly router: Router
  ) {}

  get token(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse, LoginRequest>('/auth/login', request).pipe(tap((response) => this.persist(response)));
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.api.post<AuthResponse, RegisterRequest>('/auth/register', request).pipe(tap((response) => this.persist(response)));
  }

  roles(): Observable<BackendRole[]> {
    return this.api.get<BackendRole[]>('/auth/roles');
  }

  me(): Observable<User> {
    return this.api.get<User>('/auth/me').pipe(tap((user) => this.setUser(user)));
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.userSubject.next(null);
    void this.router.navigate(['/auth/login']);
  }

  hasAnyRole(roles: BackendRole[]): boolean {
    const user = this.currentUser;
    return Boolean(user && (roles.includes(user.role) || user.role === 'ADMIN'));
  }

  private persist(response: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, response.accessToken);
    this.setUser(response.user);
  }

  private setUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.userSubject.next(user);
  }

  private readUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw) as User;
    } catch {
      localStorage.removeItem(USER_KEY);
      return null;
    }
  }
}
