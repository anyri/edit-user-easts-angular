import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../users/user.model';


@Injectable()
export class UsersService {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('api/users')
      .map(result => result.json() || [])
      .catch(error => Observable.throw(error.json().error || 'Server error'))
  }

  getUser(userid) {
    return this.http.get(`api/user?id=${userid}`)
      .map(res => res.json())
      .catch(error =>
        Observable.throw(error.json().error || 'Server error')
      )
  }

  updateUser(user: User) {
    return this.http.put(`api/users?id=${user.userid}`, user)
      .map(res => res.json())
      .catch(error =>
        Observable.throw(error.json().error || 'Server error')
      )
  }

}
