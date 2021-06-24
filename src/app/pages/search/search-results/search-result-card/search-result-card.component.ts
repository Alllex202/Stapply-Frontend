import {Component, OnInit, Input, Self} from '@angular/core';
import {ISearchAppCart} from '../../../../interfaces/interfaces';
import {SearchService} from '../../../../services/search.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UrlsClient} from '../../../../urls/client';
import {takeUntil} from 'rxjs/operators';
import {NgOnDestroyService} from '../../../../services/ng-on-destroy.service';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent implements OnInit {

  @Input() appData: ISearchAppCart | undefined;
  @Input() isSkeleton: boolean | undefined;

  isLoadingTrackingBtn = false;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private snackbar: MatSnackBar,
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
  }

  onTrackingAppClick(): void {
    this.isLoadingTrackingBtn = true;

    if (this.appData) {
      this.searchService.addNewAppOnTracking({
        name: this.appData?.name,
        linkGooglePlay: this.appData?.linkGooglePlay,
        linkAppStore: this.appData?.linkAppStore,
        linkAppGallery: this.appData?.linkAppGallery,
      })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          res => {
            this.snackbar.open(`“${this.appData?.name}“ добавлено в отслеживаемое`, undefined, {
              duration: 2000,
            });
            this.router.navigate([UrlsClient.TrackedApps]);
          },
          error => {
            this.isLoadingTrackingBtn = false;
            this.snackbar.open('Что-то пошло не так :(', undefined, {
              duration: 2000,
            });
          });
    }
  }

  openMarketInNewTab(link: string): void {
    if (!link || link === '') {
      return;
    }
    window.open(link);
  }
}
