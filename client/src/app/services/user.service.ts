import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getuser() {
    // let token = localStorage.getItem('user-token');
    // return this.http.get(
    //   `http://localhost/php-final-project/server/routes/users/user-profile.php?token=${token}`
    // );
  }



}
