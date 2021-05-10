import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISearchAppCart} from '../interfaces/interfaces';
import {UrlsApi} from '../urls/api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getSearchResult(input: string): Observable<Array<ISearchAppCart>> {
    return this.http.get<ISearchAppCart[]>(UrlsApi.Search);
  }
}
