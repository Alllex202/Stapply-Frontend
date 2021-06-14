import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlsApi} from '../urls/api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(email: string, username: string, firstName: string, lastName: string, password: string): Observable<object> {
    return this.http.post(UrlsApi.Register, {
      email,
      username,
      firstName,
      lastName,
      password
    });
  }
}
