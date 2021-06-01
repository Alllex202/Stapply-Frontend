import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITrackedAppCard} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';

@Injectable({
  providedIn: 'root'
})
export class TrackedAppsService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getTrackedApps(): Observable<Array<ITrackedAppCard>> {
    return this.httpClient.get<ITrackedAppCard[]>(UrlsApi.TrackedApps);
  }

  renameTrackedApp(id: number, newName: string): Observable<any> {
    return this.httpClient.put(`${UrlsApi.TrackedApps}/${id}`, {
      name: newName
    });
  }

  deleteTrackedApp(id: number): Observable<any> {
    return this.httpClient.delete(`${UrlsApi.TrackedApps}/${id}`);
  }
}