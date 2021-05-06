import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tracked-app-card',
  templateUrl: './tracked-app-card.component.html',
  styleUrls: ['./tracked-app-card.component.scss']
})
export class TrackedAppCardComponent implements OnInit {

  menuIsOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  menuOpened(): void {
    this.menuIsOpen = true;
  }

  menuClosed(): void {
    this.menuIsOpen = false;
  }

}
