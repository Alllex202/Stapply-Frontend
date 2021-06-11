import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  getToken(): string | null {
    return localStorage.getItem('AuthToken');
  }

  setToken(token: string): void {
    localStorage.setItem('AuthToken', token);
  }

  removeToken(): void {
    localStorage.removeItem('AuthToken');
  }

  removeAll(): void {
    localStorage.clear();
  }
}
