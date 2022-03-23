import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admission } from '../Model/admission';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private http: HttpClient) { }


  public addAdmission(admission: Admission): any {
    return this.http.post<any>('http://localhost:8081/user/addAdmission', admission);
  }


  public deleteAdmission(id: any): any {
    return this.http.delete('http://localhost:8081/user/deleteAdmission?id=' + id);
  }

  public viewAdmission(): any {
    return this.http.get<any>('http://localhost:8081/user/viewAdmission');
  }

}
