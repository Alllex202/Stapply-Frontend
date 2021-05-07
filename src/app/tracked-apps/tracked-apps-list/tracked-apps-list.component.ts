import {Component, OnInit, AfterViewInit} from '@angular/core';
import {TrackedAppsService} from '../tracked-apps.service';
import {ITrackedAppCard} from '../../interfaces/interfaces';

@Component({
  selector: 'app-tracked-apps-list',
  templateUrl: './tracked-apps-list.component.html',
  styleUrls: ['./tracked-apps-list.component.scss']
})
export class TrackedAppsListComponent implements OnInit, AfterViewInit {

  trackedApps: Array<ITrackedAppCard> | undefined;
  isLoaded = false;
  cols = 0;
  widthList = 0;

  constructor(
    public trackedAppsService: TrackedAppsService
  ) {
    trackedAppsService.getTrackedApps().subscribe(apps => {
      this.trackedApps = apps;
      this.isLoaded = true;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.getCols);
  }

  getCols(): number {
    const width: number = document.documentElement.clientWidth;
    const widthTile = 344;
    const gutterSize = 34;
    const colsWithoutGutter = Math.floor((width - 135 * 2) / widthTile);
    const gutter = (colsWithoutGutter - 1) * gutterSize;
    this.cols = Math.floor((width - 135 * 2 - gutter) / widthTile) === colsWithoutGutter ? colsWithoutGutter : colsWithoutGutter - 1;
    return this.cols;
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
}
