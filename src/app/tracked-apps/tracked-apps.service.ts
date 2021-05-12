import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ITrackedAppCard} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';
import {catchError} from 'rxjs/operators';

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
    return this.httpClient.delete(UrlsApi.TrackedApps, {
      params: {}
    })
      .pipe(catchError(err => throwError(err.error)));
  }

  deleteTrackedApp(id: number): Observable<any> {
    return this.httpClient.delete(`${UrlsApi.TrackedApps}/${id}`)
      .pipe(catchError(err => throwError(err.error)));
  }
}
