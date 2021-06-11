import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toolbarShow = true;
  title = '';

  constructor(
    private titleService: Title,
    private router: Router,
    private auth: AuthService,
  ) {
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const data = event.state.root.firstChild?.data;

        this.toolbarShow = data?.toolbarShow !== false;
        this.title = data?.title || '';
        titleService.setTitle('Stapply - ' + this.title);
      }
    });
  }

  ngOnInit(): void {
    this.auth.checkLoggedIn();
  }
}
