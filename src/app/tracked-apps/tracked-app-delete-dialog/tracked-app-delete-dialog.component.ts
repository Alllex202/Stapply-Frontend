import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-tracked-app-delete-dialog',
  templateUrl: './tracked-app-delete-dialog.component.html',
  styleUrls: ['./tracked-app-delete-dialog.component.scss']
})
export class TrackedAppDeleteDialogComponent implements OnInit {

  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<TrackedAppDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    // todo delete tracked app
    this.isLoading = true;
    setTimeout(() => {
      console.log('Remove http done');
      this.isLoading = false;

      this.dialogRef.close(true);
    }, 2000);
  }
}
