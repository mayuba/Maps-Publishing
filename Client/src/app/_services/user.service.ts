import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/index';
import { Subscription } from "rxjs/Rx";

@Injectable()
export class UserService {
  results: string[];
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/users');
  }


  getById(_id: string) {
    return this.http.get('/users/' + _id);
  }

  create(user: User) {
    return this.http.post('/users/register', user);
  }

  update(user: User) {
    return this.http.put('/users/' + user._id, user);
  }

  delete(_id: string) {
    return this.http.delete('/users/' + _id);
  }

  fileList(file: string) {
      return this.http.get('/fileList' + file);
  }

}
