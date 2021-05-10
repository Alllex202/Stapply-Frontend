import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();

  searchInput = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchClickEnter(): void {
    if (this.searchInput === '') {
      return;
    }
    this.onSearch.emit(this.searchInput);
  }

}
