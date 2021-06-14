import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {UrlsApi} from '../../urls/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  methods: { [method: string]: { name: string, func: (headers: HttpHeaders) => void } } = {
    GET: {name: 'GET', func: (headers) => this.get(headers)},
    POST: {name: 'POST', func: (headers) => this.post(headers)},
    DELETE: {name: 'DELETE', func: (headers) => this.delete(headers)},
    PUT: {name: 'PUT', func: (headers) => this.put(headers)},
    PATCH: {name: 'PATCH', func: (headers) => this.patch(headers)},
  };
  methodsList = Object.values(this.methods).map(e => e.name);
  method = this.methodsList[0];

  url = UrlsApi.GetCurrentUser;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  click(): void {
    const token = this.auth.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('Authorization', `Bearer_${token}`);
    }
    this.methods[this.method].func(headers);
  }

  get(headers: HttpHeaders): void {
    this.http
      .get(this.url,
        {headers}
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  post(headers: HttpHeaders): void {
    this.http
      .post(this.url, {},
        {headers}
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  delete(headers: HttpHeaders): void {
    this.http
      .delete(this.url,
        {headers}
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  put(headers: HttpHeaders): void {
    this.http
      .put(this.url, {},
        {headers}
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  patch(headers: HttpHeaders): void {
    this.http
      .patch(this.url, {},
        {headers}
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }
}
