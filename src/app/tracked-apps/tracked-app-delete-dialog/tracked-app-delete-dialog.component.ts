import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ITrackedAppCard} from '../../interfaces/interfaces';
import {TrackedAppsService} from '../tracked-apps.service';

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
    @Inject(MAT_DIALOG_DATA) public data: ITrackedAppCard
  ) {
  }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    // todo delete tracked app
    this.isLoading = true;

    this.trackedAppsService.deleteTrackedApp(this.data.id).subscribe(
      res => {
        console.log('done');
        this.isLoading = false;
      },
      error => {
        console.log('error');
        this.isLoading = false;
      },
      () => {

        console.log('complete');
        this.isLoading = false;
      });

    // setTimeout(() => {
    //   console.log('Delete http done');
    //   this.isLoading = false;
    //
    //   this.dialogRef.close(true);
    // }, 2000);
  }
}
