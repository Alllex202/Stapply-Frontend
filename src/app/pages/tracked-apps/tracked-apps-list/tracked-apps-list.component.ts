import {Component, OnInit, AfterViewInit, Self} from '@angular/core';
import {TrackedAppsService} from '../../../services/tracked-apps.service';
import {ITrackedAppCard} from '../../../interfaces/interfaces';
import {UrlsClient} from '../../../urls/client';
import {takeUntil} from 'rxjs/operators';
import {NgOnDestroyService} from '../../../services/ng-on-destroy.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tracked-apps-list',
  templateUrl: './tracked-apps-list.component.html',
  styleUrls: ['./tracked-apps-list.component.scss'],
  providers: [NgOnDestroyService],
})
export class TrackedAppsListComponent implements OnInit, AfterViewInit {

  urlSearch = UrlsClient.Search;
  trackedApps: Array<ITrackedAppCard> | undefined;
  isLoaded = false;
  cols = 0;
  btnCardAddMiniIsVisible: boolean | undefined;
  btnCardAdd: HTMLElement | null | undefined;

  constructor(
    private trackedAppsService: TrackedAppsService,
    @Self() private destroy$: NgOnDestroyService,
    private snackbar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.trackedAppsService.getTrackedApps()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        apps => {
          this.trackedApps = apps;
          this.isLoaded = true;
          setTimeout(() => this.btnCardAddMiniIsVisible = !this.checkVisibilityCardAddOnScreen());
        },
        error => {
          this.snackbar.open('Не удалось загрузить список приложений :(', undefined, {
            duration: 2000,
          });
          this.isLoaded = true;
        });

    this.btnCardAdd = document.getElementById('cardAdd');
    this.calculateCols();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.btnCardAddMiniIsVisible = !this.checkVisibilityCardAddOnScreen());
    window.addEventListener('resize', () => this.calculateCols());
    window.addEventListener('scroll', () => this.btnCardAddMiniIsVisible = !this.checkVisibilityCardAddOnScreen());
    window.addEventListener('resize', () => this.btnCardAddMiniIsVisible = !this.checkVisibilityCardAddOnScreen());
  }

  calculateCols(): void {
    const width = window.innerWidth;
    const widthTile = 344;
    const gutterSize = 32;
    const colsWithoutGutter = Math.floor((width - 125 * 2) / widthTile);
    const gutter = (colsWithoutGutter - 1) * gutterSize;
    this.cols = Math.floor((width - 135 * 2 - gutter) / widthTile) === colsWithoutGutter ? colsWithoutGutter : colsWithoutGutter - 1;
  }

  deleteTrackedApp(idDeleteApp: number): void {
    if (this.trackedApps !== undefined) {
      this.trackedApps = this.trackedApps.filter(app => app.id !== idDeleteApp);
    }
  }

  renameTrackedCard(newData: any): void {
    if (this.trackedApps !== undefined) {
      this.trackedApps = this.trackedApps.map(app => {
        if (app.id === newData.idApp) {
          app.name = newData.newName;
        }
        return app;
      });
    }
  }

  checkVisibilityCardAddOnScreen(): boolean {
    if (this.btnCardAdd) {
      const coords = this.btnCardAdd.getBoundingClientRect();
      return coords.y >= 0 && coords.bottom <= window.innerHeight;
    }
    return false;
  }
}
