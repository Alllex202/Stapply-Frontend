import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ITrackedAppCard} from '../../interfaces/interfaces';
import {TrackedAppsService} from '../tracked-apps.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {takeUntil} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-tracked-app-rename-dialog',
  templateUrl: './tracked-app-rename-dialog.component.html',
  styleUrls: ['./tracked-app-rename-dialog.component.scss']
})
export class TrackedAppRenameDialogComponent implements OnInit, OnDestroy {

  isLoading = false;
  newName = '';
  destroy$ = new ReplaySubject<any>(1);

  constructor(
    private trackedAppsService: TrackedAppsService,
    public dialogRef: MatDialogRef<TrackedAppRenameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrackedAppCard,
    private SnackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.newName = this.data?.name;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onRenameClick(): void {
    this.isLoading = true;

    this.trackedAppsService.renameTrackedApp(this.data.id, this.newName)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        res => {
          this.dialogRef.close(this.newName);
        },
        error => {
          this.isLoading = false;
          this.SnackBar.open(`Не удалось переименовать. Попробуйте снова.`, undefined, {
            duration: 2000,
          });
        });
  }
}
