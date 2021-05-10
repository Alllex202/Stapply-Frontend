import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ITrackedAppCard} from '../../interfaces/interfaces';
// import {ITrackedAppCardDeleteData} from '../../interfaces/interfaces';

@Component({
  selector: 'app-tracked-app-delete-dialog',
  templateUrl: './tracked-app-delete-dialog.component.html',
  styleUrls: ['./tracked-app-delete-dialog.component.scss']
})
export class TrackedAppDeleteDialogComponent implements OnInit {

  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<TrackedAppDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrackedAppCard
  ) {
  }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    // todo delete tracked app
    this.isLoading = true;
    setTimeout(() => {
      console.log('Delete http done');
      this.isLoading = false;

      this.dialogRef.close(true);
    }, 2000);
  }
}
