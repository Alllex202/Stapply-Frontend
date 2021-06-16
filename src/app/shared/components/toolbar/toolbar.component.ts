import {Component, Input, OnDestroy, OnInit, Self} from '@angular/core';
import {UrlsClient} from '../../../urls/client';
import {SharedService} from '../../services/shared.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Input() title: string | undefined;
  isLoggedIn = false;
  menuIsOpen = false;
  urlTrackedApps = UrlsClient.TrackedApps;
  urlSetting = UrlsClient.Settings;
  isShadedBottom = false;
  counter = 0;
  destroy$ = new ReplaySubject<any>(1);

  constructor(
    private sharedService: SharedService,
    private auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const isShaded = this.sharedService.checkScroll();
      if (this.isShadedBottom !== isShaded) {
        this.isShadedBottom = isShaded;
      }
    });
    this.isLoggedIn = this.auth.isLoggedIn;
    this.auth.isLoggedInChangedEmitter()
      .pipe(takeUntil(this.destroy$))
      .subscribe(next => this.isLoggedIn = next);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
}
