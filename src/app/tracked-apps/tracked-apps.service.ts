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
}
