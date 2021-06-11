import {Component, Input, OnInit} from '@angular/core';
import {UrlsClient} from '../../../urls/client';
import {SharedService} from '../../services/shared.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

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
  isShadedBottom = false;

  constructor(
    private sharedService: SharedService,
    private auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    // window.addEventListener('scroll', this.sharedService.toggleToolbarShadow);
    window.addEventListener('scroll', () => this.isShadedBottom = this.sharedService.checkScroll());
  }

  menuOpened(): void {
    this.menuIsOpen = true;
  }

  menuClosed(): void {
    this.menuIsOpen = false;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }
}
