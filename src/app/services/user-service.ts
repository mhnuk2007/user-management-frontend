
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  baseURL = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<User[]>(this.baseURL);
  }

}
