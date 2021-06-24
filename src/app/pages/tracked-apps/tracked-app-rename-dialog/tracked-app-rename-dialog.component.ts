import {Component, Inject, OnInit, Self} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ITrackedAppCard} from '../../../interfaces/interfaces';
import {TrackedAppsService} from '../../../services/tracked-apps.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, Validators} from '@angular/forms';
import {NgOnDestroyService} from '../../../services/ng-on-destroy.service';

@Component({
  selector: 'app-tracked-app-rename-dialog',
  templateUrl: './tracked-app-rename-dialog.component.html',
  styleUrls: ['./tracked-app-rename-dialog.component.scss'],
  providers: [NgOnDestroyService],
})
export class TrackedAppRenameDialogComponent implements OnInit {

  isLoading = false;
  formRename = this.formBuilder.group({
    newName: ['', [Validators.required, Validators.minLength(3)]],
  }, {updateOn: 'submit'});

  constructor(
    private trackedAppsService: TrackedAppsService,
    private dialogRef: MatDialogRef<TrackedAppRenameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrackedAppCard,
    private SnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
    this.formRename.setValue({newName: this.data?.name});
  }

  onRename(): void {
    if (this.formRename.invalid) {
      this.formRename.markAllAsTouched();
    } else {
      if (this.formRename.value.newName === this.data?.name) {
        this.dialogRef.close(this.formRename.value.newName);
        return;
      }
      this.isLoading = true;
      this.trackedAppsService.renameTrackedApp(this.data.id, this.formRename.value.newName)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          res => {
            this.dialogRef.close(this.formRename.value.newName);
          },
          error => {
            this.isLoading = false;
            this.SnackBar.open(`Не удалось переименовать. Попробуйте снова.`, undefined, {
              duration: 2000,
            });
          });
    }
  }
}
