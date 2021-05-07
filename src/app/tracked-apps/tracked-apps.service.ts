import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITrackedAppCard} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TrackedAppsService {

  private apiUrls = {
    trackedAppsList: 'api/apps',
  };

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getTrackedApps(): Observable<Array<ITrackedAppCard>> {
    return this.httpClient.get<ITrackedAppCard[]>(this.apiUrls.trackedAppsList);
  }
}
