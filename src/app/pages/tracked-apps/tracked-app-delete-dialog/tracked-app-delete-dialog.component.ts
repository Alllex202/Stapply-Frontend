import {Component, Inject, OnInit, Self} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ITrackedAppCard} from '../../../interfaces/interfaces';
import {TrackedAppsService} from '../../../services/tracked-apps.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {takeUntil} from 'rxjs/operators';
import {NgOnDestroyService} from '../../../services/ng-on-destroy.service';

@Component({
  selector: 'app-tracked-app-delete-dialog',
  templateUrl: './tracked-app-delete-dialog.component.html',
  styleUrls: ['./tracked-app-delete-dialog.component.scss'],
  providers: [NgOnDestroyService],
})
export class TrackedAppDeleteDialogComponent implements OnInit {

  isLoading = false;

  constructor(
    private trackedAppsService: TrackedAppsService,
    public dialogRef: MatDialogRef<TrackedAppDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrackedAppCard,
    private SnackBar: MatSnackBar,
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    this.isLoading = true;

    this.trackedAppsService.deleteTrackedApp(this.data.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        res => {
          this.dialogRef.close(true);
        },
        error => {
          this.isLoading = false;
          this.SnackBar.open(`Не удалось удалить. Попробуйте снова.`, undefined, {
            duration: 2000,
          });
        });
  }
}
