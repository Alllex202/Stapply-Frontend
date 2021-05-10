import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {INewApplication} from '../../interfaces/interfaces';

@Component({
  selector: 'app-manual-addition-modal',
  templateUrl: './manual-addition-modal.component.html',
  styleUrls: ['./manual-addition-modal.component.scss']
})
export class ManualAdditionModalComponent implements OnInit {

  isLoading = false;
  newApp: INewApplication;

  constructor(
    public dialogRef: MatDialogRef<ManualAdditionModalComponent>,
  ) {
    this.newApp = {
      name: '',
      linkAppGallery: '',
      linkAppStore: '',
      linkGooglePlay: '',
    };
  }

  ngOnInit(): void {
  }

  onCreateAppClick(): void {
    // todo create app
    this.isLoading = true;
    setTimeout(() => {
      console.log('Create App http done', this.newApp);
      this.isLoading = true;

      this.dialogRef.close();
    }, 2000);
  }

}
