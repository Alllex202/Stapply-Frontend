import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INewApplication, ISearchAppCart} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSearchResult(query: string): Observable<Array<ISearchAppCart>> {
    return this.http.get<ISearchAppCart[]>(`${UrlsApi.Search}/${query}`);
  }

  addNewAppOnTracking(newApp: INewApplication): Observable<any> {
    return this.http.post(UrlsApi.AddTrackedApp, {
      appGalleryAppLink: newApp.linkAppGallery || null,
      appStoreAppLik: newApp.linkAppStore || null,
      googlePlayAppLink: newApp.linkGooglePlay || null,
      name: newApp.name,
    });
  }
}
