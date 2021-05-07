import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TrackedAppDeleteDialogComponent} from '../tracked-app-delete-dialog/tracked-app-delete-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tracked-app-card',
  templateUrl: './tracked-app-card.component.html',
  styleUrls: ['./tracked-app-card.component.scss']
})
export class TrackedAppCardComponent implements OnInit {

  @Output() deleteCard = new EventEmitter<number>();
  @Input() isSkeleton: boolean | undefined;
  @Input() appData: any;
  menuIsOpen = false;

  constructor(
    public dialog: MatDialog,
    private SnackBar: MatSnackBar) {
  }

  openDeleteDialog(): void {
    const deleteDialogRef = this.dialog.open(TrackedAppDeleteDialogComponent, {
      autoFocus: false,
      panelClass: 'dialog',
      data: this.appData,
      disableClose: true,
    });

    deleteDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCard.emit(this.appData.id);
        this.SnackBar.open(`Приложение “${this.appData.name}“ удалено`, undefined, {
          duration: 2000,
        });
      }
    });
  }

  ngOnInit(): void {
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
