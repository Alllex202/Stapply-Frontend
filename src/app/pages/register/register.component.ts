import {Component, OnInit, Self} from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {Router} from '@angular/router';
import {NgOnDestroyService} from '../../services/ng-on-destroy.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [NgOnDestroyService],
})
export class RegisterComponent implements OnInit {

  form = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  constructor(
    private registerService: RegisterService,
    private router: Router,
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.registerService.register(this.form.email, this.form.username, this.form.firstName,
      this.form.lastName, this.form.password)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        res => {
          console.log('RESPONSE', res);
          console.log('FORM', this.form);
          this.router.navigate(['login']);
        },
        err => {
          console.log('ERROR', err);
        }
      );
  }

}
