import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tracked-app-card',
  templateUrl: './tracked-app-card.component.html',
  styleUrls: ['./tracked-app-card.component.scss']
})
export class TrackedAppCardComponent implements OnInit {

  menuIsOpen = false;
  isLoaded = false;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 3000);
  }

  menuOpened(): void {
    this.menuIsOpen = true;
  }

  menuClosed(): void {
    this.menuIsOpen = false;
  }

  cardClicked(): void {
    console.log('open card');
  }
}
