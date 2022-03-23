import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http: HttpClient) { }

  public getType(user: User): any {
    return this.http.post<any>("http://localhost:8081/login", user);
  }

  public loginAdminFromRemote(user: User, type: String): any {
    return this.http.post<any>("http://localhost:8081/admin/login", user);
  }
  public loginUserFromRemote(user: User, type: String): any {
    return this.http.post<any>("http://localhost:8081/user/login", user);
  }

  public signupUser(user: User) {
    return this.http.post<any>("http://localhost:8081/user/signup", user);
  }
  public signupAdmin(user: User) {
    return this.http.post<any>("http://localhost:8081/admin/signup", user);
  }

  public deleteStudentByAdmin(id: number) {
    return this.http.delete<any>("http://localhost:8081/admin/deleteStudentByAdmin?id=" + id)
  }



  loggedIn() {
    return !!sessionStorage.getItem('value')
  }

  getToken() {
    return sessionStorage.getItem('value')
  }




}
