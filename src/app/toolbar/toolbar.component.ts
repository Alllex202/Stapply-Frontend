import {Component, Input, OnInit} from '@angular/core';
import {UrlsClient} from '../urls/client';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string | undefined;
  menuIsOpen = false;
  urlTrackedApps = UrlsClient.TrackedApps;
  urlSetting = UrlsClient.Settings;

  constructor(
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.sharedService.toggleToolbarShadow);
  }

  menuOpened(): void {
    this.menuIsOpen = true;
  }

  menuClosed(): void {
    this.menuIsOpen = false;
  }
}
