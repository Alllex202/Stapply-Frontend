import {Component, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {ISearchAppCart} from '../interfaces/interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isLoading = false;
  searchResult: Array<ISearchAppCart> = [];
  lastSearch = '';

  constructor(
    public searchService: SearchService,
    private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  search(input: string): void {
    this.isLoading = true;
    this.searchResult = [];
    this.searchService.getSearchResult(input)
      .subscribe(
        result => {
          this.searchResult = result;
          this.lastSearch = input;
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
          this.snackbar.open('При поиске произошла ошибка.', undefined, {
            duration: 2000,
          });
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
