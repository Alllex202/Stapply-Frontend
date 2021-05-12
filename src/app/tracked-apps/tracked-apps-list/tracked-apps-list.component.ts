import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {TrackedAppsService} from '../tracked-apps.service';
import {ITrackedAppCard} from '../../interfaces/interfaces';
import {UrlsClient} from '../../urls/client';

@Component({
  selector: 'app-tracked-apps-list',
  templateUrl: './tracked-apps-list.component.html',
  styleUrls: ['./tracked-apps-list.component.scss']
})
export class TrackedAppsListComponent implements OnInit, AfterViewInit {

  urlSearch = UrlsClient.Search;
  trackedApps: Array<ITrackedAppCard> | undefined;
  isLoaded = false;
  cols = 0;
  btnCardAddMiniIsVisible: boolean | undefined;
  btnCardAdd: HTMLElement | null | undefined;

  constructor(
    public trackedAppsService: TrackedAppsService
  ) {
  }

  ngOnInit(): void {
    // в ngOnInit или в конструктор?
    this.trackedAppsService.getTrackedApps().subscribe(apps => {
      this.trackedApps = apps;
      this.isLoaded = true;
      setTimeout(() => this.btnCardAddMiniIsVisible = !this.checkVisibilityCardAddOnScreen());
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
