import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ITrackedAppCardRenameData} from '../../interfaces/interfaces';

@Component({
  selector: 'app-tracked-app-rename-dialog',
  templateUrl: './tracked-app-rename-dialog.component.html',
  styleUrls: ['./tracked-app-rename-dialog.component.scss']
})
export class TrackedAppRenameDialogComponent implements OnInit {

  isLoading = false;
  newName = '';

  constructor(
    public dialogRef: MatDialogRef<TrackedAppRenameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrackedAppCardRenameData,
  ) {
  }

  onRenameClick(): void {
    // todo rename tracked app
    this.isLoading = true;
    setTimeout(() => {
      console.log('Rename http done');
      this.isLoading = true;

      this.dialogRef.close(this.newName);
    }, 2000);
  }

  ngOnInit(): void {
    this.newName = this.data?.name;
  }

}
