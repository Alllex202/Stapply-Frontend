import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {INewApplication} from '../../interfaces/interfaces';
import {SearchService} from '../search.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UrlsClient} from '../../urls/client';

@Component({
  selector: 'app-manual-addition-modal',
  templateUrl: './manual-addition-modal.component.html',
  styleUrls: ['./manual-addition-modal.component.scss']
})
export class ManualAdditionModalComponent implements OnInit {

  isLoading = false;
  newApp: INewApplication = {
    name: '',
    linkAppGallery: '',
    linkAppStore: '',
    linkGooglePlay: '',
  };

  constructor(
    public dialogRef: MatDialogRef<ManualAdditionModalComponent>,
    private searchService: SearchService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
  }

  onCreateAppClick(): void {
    this.isLoading = true;
    this.searchService.addNewAppOnTracking(this.newApp)
      .subscribe(
        res => {
          this.snackbar.open(`“${this.newApp.name}“ добавлено в отслеживаемое`, undefined, {
            duration: 2000,
          });
          this.router.navigate([UrlsClient.TrackedApps]);
          this.dialogRef.close();
        },
        error => {
          this.isLoading = false;
          this.snackbar.open('Что-то пошло не так :(', undefined, {
            duration: 2000,
          });
        });
  }
}
