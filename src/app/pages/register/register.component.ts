import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterService} from '../../services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.registerService.register(this.form.email, this.form.username, this.form.firstName,
      this.form.lastName, this.form.password)
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
