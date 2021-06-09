import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Input() lastSearch: string | undefined;
  isShadedBottom = false;

  searchInput = '';

  constructor(
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    // window.addEventListener('scroll', this.sharedService.toggleToolbarShadow);
    window.addEventListener('scroll', () => this.isShadedBottom = this.sharedService.checkScroll());
  }

  onSearchClickEnter(): void {
    this.search.emit(this.searchInput);
  }

  onClearInputClick(): void {
    this.searchInput = '';
  }
}
