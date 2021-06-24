import {Component, Input, OnInit, Self} from '@angular/core';
import {UrlsClient} from '../../../urls/client';
import {SharedService} from '../../services/shared.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {NgOnDestroyService} from '../../../services/ng-on-destroy.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [NgOnDestroyService]
})
export class ToolbarComponent implements OnInit {

  @Input() title: string | undefined;
  isLoggedIn = false;
  menuIsOpen = false;
  urlTrackedApps = UrlsClient.TrackedApps;
  urlSetting = UrlsClient.Settings;
  isShadedBottom = false;
  counter = 0;

  constructor(
    private sharedService: SharedService,
    private auth: AuthService,
    private router: Router,
    @Self() private destroy$: NgOnDestroyService,
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
