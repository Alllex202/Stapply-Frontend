import {Component, OnInit, Input} from '@angular/core';
import {ISearchAppCart} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent implements OnInit {

  @Input() appData: ISearchAppCart | undefined;
  @Input() isSkeleton: boolean | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
