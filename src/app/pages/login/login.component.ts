import {Component, OnInit, Self} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NgOnDestroyService} from '../../services/ng-on-destroy.service';
import {takeUntil} from 'rxjs/operators';

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
    @Self() private destroy$: NgOnDestroyService,
  ) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.login(this.username, this.password)
      .pipe(takeUntil(this.destroy$))
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
