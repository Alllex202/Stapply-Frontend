import {Component, OnInit, Self} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {INewApplication} from '../../../interfaces/interfaces';
import {SearchService} from '../../../services/search.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UrlsClient} from '../../../urls/client';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {NgOnDestroyService} from '../../../services/ng-on-destroy.service';

@Component({
  selector: 'app-manual-addition-modal',
  templateUrl: './manual-addition-modal.component.html',
  styleUrls: ['./manual-addition-modal.component.scss'],
  providers: [NgOnDestroyService],
})
export class ManualAdditionModalComponent implements OnInit {

  isLoading = false;
  formNewApp = this.formBuilder.group({
    appName: ['', [Validators.required, Validators.minLength(3)]],
    linkGooglePlay: ['',
      Validators.pattern(/https:\/\/play\.google\.com\/store\/apps\/details\?id=[a-zA-Z0-9.]+((&(hl|gl)=[a-zA-Z]+)?)+/)],
    linkAppGallery: [{value: '', disabled: true},
      Validators.pattern(/https:\/\/appgallery\.huawei\.com\/(#\/)?app\/[a-zA-Z0-9]+/)],
    linkAppStore: ['',
      Validators.pattern(/https:\/\/apps\.apple\.com\/ru\/app\/([a-zA-Z-0-9%]+\/)?id[0-9]+/)],
  }, {
    updateOn: 'submit',
    validators: this.validatorOneLinkRequired(['linkGooglePlay', 'linkAppGallery', 'linkAppStore']),
  });

  constructor(
    private dialogRef: MatDialogRef<ManualAdditionModalComponent>,
    private searchService: SearchService,
    private router: Router,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
  }

  validatorOneLinkRequired(controls: string[]): object {
    return (group: FormGroup): ValidationErrors | null => {
      const hasAtLeastOne = group && group.controls && controls
        .some(e => !Validators.required(group.controls[e]));

      if (!hasAtLeastOne) {
        group.controls.linkAppStore.setErrors({oneLinkRequired: true});
      } else {
        if (group.controls.linkAppStore.hasError('oneLinkRequired')) {
          group.controls.linkAppStore.setErrors({oneLinkRequired: null});
          group.controls.linkAppStore.updateValueAndValidity();
        }
      }

      return null;
    };
  }

  onCreateNewApp(): void {
    if (this.formNewApp.valid) {
      this.isLoading = true;
      const newApp: INewApplication = {
        name: this.formNewApp.value.appName,
        linkAppGallery: this.formNewApp.value.linkAppGallery ?? '',
        linkGooglePlay: this.formNewApp.value.linkGooglePlay ?? '',
        linkAppStore: this.formNewApp.value.linkAppStore ?? '',
      };
      this.searchService.addNewAppOnTracking(newApp)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          res => {
            this.snackbar.open(`???${newApp.name}??? ?????????????????? ?? ??????????????????????????`, undefined, {
              duration: 2000,
            });
            this.router.navigate([UrlsClient.TrackedApps]);
            this.dialogRef.close();
          },
          error => {
            this.isLoading = false;
            this.snackbar.open('??????-???? ?????????? ???? ?????? :(', undefined, {
              duration: 2000,
            });
          });
    } else {
      this.formNewApp.markAllAsTouched();
    }
  }
}
