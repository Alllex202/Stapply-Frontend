import {Component, OnInit} from '@angular/core';
import {UrlsClient} from '../../../../urls/client';

@Component({
  selector: 'app-tracked-app-card-add',
  templateUrl: './tracked-app-card-add.component.html',
  styleUrls: ['./tracked-app-card-add.component.scss']
})
export class TrackedAppCardAddComponent implements OnInit {

  urlSearch = UrlsClient.Search;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCartAddClick(): void {
    // console.log('cart add - go to search page');
  }

}
