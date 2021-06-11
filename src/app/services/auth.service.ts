import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlsApi} from '../urls/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string | null = null;
  isLoggedIn = false;
  user: any | null = null;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<{ user: string, token: string }> {
    return this.http.post<{ user: string, token: string }>(`${UrlsApi.Login}`, {username, password});
  }

  logout(): void {
    this.removeToken();
  }

  checkLoggedIn(): boolean {
    this.isLoggedIn = !!localStorage.getItem('TokenAuth');
    if (!this.isLoggedIn) {
      this.user = null;
    }
    return this.isLoggedIn;
  }

  setToken(token: string): void {
    localStorage.setItem('TokenAuth', token);
    this.isLoggedIn = true;
  }

  removeToken(): void {
    localStorage.removeItem('TokenAuth');
    this.isLoggedIn = false;
    this.user = null;
  }
}
