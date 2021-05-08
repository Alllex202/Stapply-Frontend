import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toolbarShow = true;
  title = '';

  constructor(
    private titleService: Title,
    public router: Router,
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
}
