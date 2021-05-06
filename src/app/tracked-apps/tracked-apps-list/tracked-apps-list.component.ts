import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-tracked-apps-list',
  templateUrl: './tracked-apps-list.component.html',
  styleUrls: ['./tracked-apps-list.component.scss']
})
export class TrackedAppsListComponent implements OnInit, AfterViewInit {

  cols = 0;
  widthList = 0;
  apps = new Array(50);

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.getCols);
  }

  getCols(): number {
    const width: number = document.documentElement.clientWidth;
    const widthTile = 344;
    const gutterSize = 32;
    const colsWithoutGutter = Math.floor((width - 135 * 2) / widthTile);
    const gutter = (colsWithoutGutter - 1) * gutterSize;
    this.cols = Math.floor((width - 135 * 2 - gutter) / widthTile) === colsWithoutGutter ? colsWithoutGutter : colsWithoutGutter - 1;
    return this.cols;
  }
}
