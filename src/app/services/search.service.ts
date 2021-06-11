import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INewApplication, ISearchAppCart} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';
import {AuthService} from './auth.service';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private ls: LocalStorageService,
  ) {
  }

  getSearchResult(query: string): Observable<Array<ISearchAppCart>> {
    return this.http.get<ISearchAppCart[]>(`${UrlsApi.Search}/${query}`,
      {headers: new HttpHeaders({Authorization: `Bearer_${this.auth.getToken()}`})}
    );
  }

  addNewAppOnTracking(newApp: INewApplication): Observable<any> {
    return this.http.post(UrlsApi.AddTrackedApp, {
        appGalleryAppLink: newApp.linkAppGallery || null,
        appStoreAppLik: newApp.linkAppStore || null,
        googlePlayAppLink: newApp.linkGooglePlay || null,
        name: newApp.name,
      },
      {headers: new HttpHeaders({Authorization: `Bearer_${this.auth.getToken()}`})}
    );
  }
}
