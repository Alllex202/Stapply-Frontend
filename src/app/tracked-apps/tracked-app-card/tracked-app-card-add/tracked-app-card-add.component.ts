import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tracked-app-card-add',
  templateUrl: './tracked-app-card-add.component.html',
  styleUrls: ['./tracked-app-card-add.component.scss']
})
export class TrackedAppCardAddComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onCartAddClick(): void {
    // console.log('cart add - go to search page');
  }

}
