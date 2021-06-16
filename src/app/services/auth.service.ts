import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlsApi} from '../urls/api';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string | null = null;
  private IsLoggedIn = false;
  user: any | null = null;
  private isLoggedInChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient,
              private ls: LocalStorageService) {
  }

  set isLoggedIn(val: boolean) {
    this.IsLoggedIn = val;
    this.isLoggedInChanged.emit(val);
  }

  get isLoggedIn(): boolean {
    return this.IsLoggedIn;
  }

  isLoggedInChangedEmitter(): EventEmitter<boolean> {
    return this.isLoggedInChanged;
  }

  login(username: string, password: string): Observable<{ user: string, token: string }> {
    return this.http.post<{ user: string, token: string }>(`${UrlsApi.Login}`, {username, password});
  }

  logout(): void {
    this.removeToken();
    this.isLoggedIn = false;
    this.user = null;
  }

  checkLoggedIn(): boolean {
    this.isLoggedIn = !!this.ls.getToken();
    if (!this.isLoggedIn) {
      this.user = null;
    }
    return this.isLoggedIn;
  }

  getToken(): string | null {
    return this.ls.getToken();
  }

  setToken(token: string): void {
    this.ls.setToken(token);
    this.isLoggedIn = true;
  }

  removeToken(): void {
    this.ls.removeToken();
  }
}
