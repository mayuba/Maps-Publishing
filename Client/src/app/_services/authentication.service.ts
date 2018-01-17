import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post('/users/authenticate', { username: username, password: password });
  }

  logout(): Observable<any> {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    return Observable.create(
      function(observer){
        observer.next()
    });
  }

  isLoggedIn(){
    return localStorage.currentUser;
  }
}
