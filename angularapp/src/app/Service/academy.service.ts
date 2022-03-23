import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Academy } from '../Model/academy';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {

  constructor(private http: HttpClient) { }

  public addAcademy(academy: Academy): any {
    return this.http.post<any>('http://localhost:8081/admin/addAcademy', academy);
  }

  public updateAcademy(academy: Academy): any {
    return this.http.put<any>('http://localhost:8081/admin/updateAcademy', academy);
  }

  public deleteAcademy(id: number): any {
    return this.http.delete<any>('http://localhost:8081/admin/deleteAcademy?id=' + id);
  }

  public viewAcademy(): any {
    return this.http.get<any>('http://localhost:8081/admin/viewAcademy');
  }
  public getAcademyById(id: number): any {
    return this.http.get<any>('http://localhost:8081/admin/getAcademy?id=' + id)
  }
}
