import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.login(this.username, this.password)
      .subscribe(
        res => {
          // console.log(res, this.auth.redirectUrl);
          this.auth.setToken(res.token);
          this.auth.user = res.user;
          this.router.navigate([this.auth.redirectUrl || '/']);
        },
        err => {
          if (err.status === 403) {
            console.log('Неверный логин или пароль');
          } else {
            console.log('Какая-то ошибка');
          }
        }
      );
  }
}
