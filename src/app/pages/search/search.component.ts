import {Component, OnInit, Self} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {ISearchAppCart} from '../../interfaces/interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, debounceTime, switchMap, takeUntil} from 'rxjs/operators';
import {Subject, of} from 'rxjs';
import {NgOnDestroyService} from '../../services/ng-on-destroy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [NgOnDestroyService],
})
export class SearchComponent implements OnInit {

  isLoading = false;
  searchResult: Array<ISearchAppCart> = [];
  lastSearch = '';
  search$ = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private snackbar: MatSnackBar,
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
    this.search$.pipe(
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
}
