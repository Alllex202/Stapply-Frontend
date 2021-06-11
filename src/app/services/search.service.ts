import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INewApplication, ISearchAppCart} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {
  }

  getSearchResult(query: string): Observable<Array<ISearchAppCart>> {
    return this.http.get<ISearchAppCart[]>(`${UrlsApi.Search}/${query}`,
      {headers: new HttpHeaders({Authorization: `Bearer_${this.auth.checkLoggedIn()}`})});
  }

  addNewAppOnTracking(newApp: INewApplication): Observable<any> {
    return this.http.post(UrlsApi.AddTrackedApp, {
      appGalleryAppLink: newApp.linkAppGallery || null,
      appStoreAppLik: newApp.linkAppStore || null,
      googlePlayAppLink: newApp.linkGooglePlay || null,
      name: newApp.name,
    }, {headers: new HttpHeaders({Authorization: `Bearer_${this.auth.checkLoggedIn()}`})});
  }
}
