import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITrackedAppCard} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TrackedAppsService {

  constructor(
    private httpClient: HttpClient,
    private auth: AuthService,
  ) {
  }

  getTrackedApps(): Observable<Array<ITrackedAppCard>> {
    return this.httpClient.get<ITrackedAppCard[]>(UrlsApi.TrackedApps,
      {headers: new HttpHeaders({Authorization: `Bearer_${this.auth.checkLoggedIn()}`})}
    );
  }

  renameTrackedApp(id: number, newName: string): Observable<any> {
    return this.httpClient.put(`${UrlsApi.TrackedApps}/${id}`, {
        name: newName
      },
      {headers: new HttpHeaders({Authorization: `Bearer_${this.auth.checkLoggedIn()}`})});
  }

  deleteTrackedApp(id: number): Observable<any> {
    return this.httpClient.delete(`${UrlsApi.TrackedApps}/${id}`,
      {headers: new HttpHeaders({Authorization: `Bearer_${this.auth.checkLoggedIn()}`})});
  }
}
