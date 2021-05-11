import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();

  searchInput = '';
  lastSearch = '';
  isShadowed = false;

  constructor(
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.isShadowed = this.sharedService.toggleToolbarShadow(this.isShadowed));
  }

  onSearchClickEnter(): void {
    if (this.searchInput === '' || this.searchInput === this.lastSearch) {
      return;
    }
    this.lastSearch = this.searchInput;
    this.onSearch.emit(this.searchInput);
  }

  onClearInputClick(): void {
    this.searchInput = '';
  }
}
