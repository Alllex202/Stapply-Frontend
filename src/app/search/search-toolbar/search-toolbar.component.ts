import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();
  @Input() lastSearch: string | undefined;

  searchInput = '';

  constructor(
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.sharedService.toggleToolbarShadow);
  }

  onSearchClickEnter(): void {
    if (this.searchInput === '' || this.searchInput === this.lastSearch) {
      return;
    }
    this.onSearch.emit(this.searchInput);
  }

  onClearInputClick(): void {
    this.searchInput = '';
  }
}
