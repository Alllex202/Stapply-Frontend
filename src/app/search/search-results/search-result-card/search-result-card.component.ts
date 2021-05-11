import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ISearchAppCart} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent implements OnInit {

  @Input() appData: ISearchAppCart | undefined;
  @Input() isSkeleton: boolean | undefined;
  @Output() onTrackingApp = new EventEmitter<number>();

  isLoadingTrackingBtn = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onTrackingAppClick(): void {
    // todo реализовать запрос на сервер для кнопки отслеживания
    this.isLoadingTrackingBtn = true;
    setTimeout(() => {
      this.onTrackingApp.emit(this.appData?.id);
      this.isLoadingTrackingBtn = false;
    }, 2000);
  }
}
