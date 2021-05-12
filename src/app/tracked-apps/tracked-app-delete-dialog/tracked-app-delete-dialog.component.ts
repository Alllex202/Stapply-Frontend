import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ITrackedAppCard} from '../../interfaces/interfaces';
import {TrackedAppsService} from '../tracked-apps.service';
import {MatSnackBar} from '@angular/material/snack-bar';

// import {ITrackedAppCardDeleteData} from '../../interfaces/interfaces';

@Component({
  selector: 'app-tracked-app-delete-dialog',
  templateUrl: './tracked-app-delete-dialog.component.html',
  styleUrls: ['./tracked-app-delete-dialog.component.scss']
})
export class TrackedAppDeleteDialogComponent implements OnInit {

  isLoading = false;

  constructor(
    private trackedAppsService: TrackedAppsService,
    public dialogRef: MatDialogRef<TrackedAppDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrackedAppCard,
    private SnackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    // todo delete tracked app
    this.isLoading = true;

    this.trackedAppsService.deleteTrackedApp(this.data.id).subscribe(
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
