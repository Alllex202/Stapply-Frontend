import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ISearchAppCart} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSearchResult(input: string): Observable<Array<ISearchAppCart>> {
    // debugger
    return this.http.get<ISearchAppCart[]>(UrlsApi.Search);
      // .pipe(catchError(err => throwError(err.error)));
  }
}
