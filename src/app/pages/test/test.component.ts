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

  methods = [
    {method: 'get'},
    {method: 'post'},
    {method: 'delete'},
    {method: 'put'},
    {method: 'patch'},
  ];

  url = UrlsApi.GetCurrentUser;
  method = this.methods[0].method;

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
    if (this.method === 'get') {
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
    } else if (this.method === 'post') {
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
    } else if (this.method === 'delete') {
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
    } else if (this.method === 'put') {
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
    } else if (this.method === 'patch') {
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
}
