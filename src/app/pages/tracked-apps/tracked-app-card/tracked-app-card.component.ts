import {Component, Input, OnInit, Output, EventEmitter, Self} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TrackedAppDeleteDialogComponent} from '../tracked-app-delete-dialog/tracked-app-delete-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TrackedAppRenameDialogComponent} from '../tracked-app-rename-dialog/tracked-app-rename-dialog.component';
import {ITrackedAppCard} from '../../../interfaces/interfaces';
import {UrlsClient} from '../../../urls/client';
import {takeUntil} from 'rxjs/operators';
import {NgOnDestroyService} from '../../../services/ng-on-destroy.service';

@Component({
  selector: 'app-tracked-app-card',
  templateUrl: './tracked-app-card.component.html',
  styleUrls: ['./tracked-app-card.component.scss'],
  providers: [NgOnDestroyService],
})
export class TrackedAppCardComponent implements OnInit {

  urlTrackedApp = UrlsClient.TrackedApp;

  @Output() deleteCard = new EventEmitter<number>();
  @Output() renameCard = new EventEmitter<object>();
  @Input() isSkeleton: boolean | undefined;
  @Input() appData: ITrackedAppCard | undefined;
  menuIsOpen = false;

  constructor(
    private dialog: MatDialog,
    private SnackBar: MatSnackBar,
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
    this.urlTrackedApp += this.appData?.id;
  }

  openDeleteDialog(): void {
    const deleteDialogRef = this.dialog.open(TrackedAppDeleteDialogComponent, {
      autoFocus: false,
      panelClass: 'dialog',
      data: this.appData,
      disableClose: true,
    });

    deleteDialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.deleteCard.emit(this.appData?.id);
          this.SnackBar.open(`Приложение “${this.appData?.name}“ удалено`, undefined, {
            duration: 2000,
          });
        }
      });
  }

  openRenameDialog(): void {
    const renameDialogRef = this.dialog.open(TrackedAppRenameDialogComponent, {
      autoFocus: false,
      panelClass: 'dialog',
      data: this.appData,
      disableClose: true,
    });

    renameDialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          const oldName = this.appData?.name;
          this.renameCard.emit({newName: result, idApp: this.appData?.id});
          this.SnackBar.open(`“${oldName}“ переименован в “${result}“`, undefined, {
            duration: 1500,
          });
        }
      });
  }

  menuOpened(): void {
    this.menuIsOpen = true;
  }

  menuClosed(): void {
    this.menuIsOpen = false;
  }

  cardClicked(): void {
    // console.log('open card');
  }
}
