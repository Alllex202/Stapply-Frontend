import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackedAppsService {

  private trackedAppsUrl = 'api/apps';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getTrackedApps(): Observable<Array<any>> {
    return this.httpClient.get<any[]>(this.trackedAppsUrl);
  }
}
