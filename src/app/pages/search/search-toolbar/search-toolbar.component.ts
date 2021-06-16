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
    window.addEventListener('scroll', () => {
      const isShaded = this.sharedService.checkScroll();
      if (this.isShadedBottom !== isShaded) {
        this.isShadedBottom = isShaded;
      }
    });
  }

  onSearchClickEnter(): void {
    this.search.emit(this.searchInput);
  }

  onClearInputClick(): void {
    this.searchInput = '';
  }
}
