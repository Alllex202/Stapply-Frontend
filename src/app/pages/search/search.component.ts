import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {ISearchAppCart} from '../../interfaces/interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, debounceTime, filter, switchMap, takeUntil} from 'rxjs/operators';
import {Subject, of, ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  isLoading = false;
  searchResult: Array<ISearchAppCart> = [];
  lastSearch = '';
  search$ = new Subject<string>();
  destroy$ = new ReplaySubject<any>(1);

  constructor(
    public searchService: SearchService,
    private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.search$.pipe(
      // filter((input: string) => input.length > 0 && input !== this.lastSearch),
      debounceTime(400),
      switchMap((input: string) => {
        this.isLoading = true;
        this.lastSearch = input;
        return this.searchService.getSearchResult(input).pipe(catchError(err => {
          this.showSnackbarErrorSearch();
          this.lastSearch = '';
          return of([]);
        }));
      }),
      takeUntil(this.destroy$)
    ).subscribe(
      result => {
        this.searchResult = result;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.showSnackbarErrorSearch();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  search(input: string): void {
    if (input.length > 0 && input !== this.lastSearch) {
      this.searchResult = [];
      this.search$.next(input);
    }
  }

  showSnackbarErrorSearch(): void {
    this.snackbar.open('При поиске произошла ошибка.', undefined, {
      duration: 2000,
    });
  }

  // onTrackingApp(idApp: number): void {
  //   this.searchResult = this.searchResult.map(app => {
  //     if (app.id === idApp) {
  //       app.isTracked = !app.isTracked;
  //     }
  //     return app;
  //   });
  // }
}
