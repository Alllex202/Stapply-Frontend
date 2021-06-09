import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ManualAdditionModalComponent} from '../manual-addition-modal/manual-addition-modal.component';
import {ISearchAppCart} from '../../../interfaces/interfaces';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() isLoading: boolean | undefined;
  @Input() searchResult: Array<ISearchAppCart> | undefined;
  // @Output() onTrackingApp = new EventEmitter<number>();

  constructor(
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ManualAdditionModalComponent, {
      disableClose: true,
      autoFocus: false,
      panelClass: ['dialog', 'dialog-addition'],
    });
  }

  // onTrackingAppClick(id: number): void {
  //   this.onTrackingApp.emit(id);
  // }
}
