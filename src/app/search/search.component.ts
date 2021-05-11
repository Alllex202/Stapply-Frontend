import {Component, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {ISearchAppCart} from '../interfaces/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isLoading = false;
  searchResult: Array<ISearchAppCart> = [];

  constructor(public searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  search(input: string): void {
    this.isLoading = true;
    this.searchResult = [];
    this.searchService.getSearchResult(input).subscribe(result => {
      console.log('Search', input);
      this.searchResult = result;
      this.isLoading = false;
    });
  }

  loadingPage(numPage: number): void {
    // todo Релизовать подгрузку результатов поиска
  }

  onTrackingApp(idApp: number): void {
    this.searchResult = this.searchResult.map(app => {
      if (app.id === idApp) {
        app.isTracked = !app.isTracked;
      }
      return app;
    });
  }
}
