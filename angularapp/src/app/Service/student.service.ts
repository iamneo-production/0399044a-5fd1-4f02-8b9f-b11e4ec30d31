import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public addStudent(student: Student): any {
    return this.http.post<any>('http://localhost:8081/admin/addStudent', student);
  }

  public updateStudent(student: Student): any {
    return this.http.put<any>('http://localhost:8081/admin/updateStudent', student);
  }

  public deleteStudent(id: number): any {
    return this.http.delete<any>('http://localhost:8081/admin/deleteStudent?id=' + id);
  }

  public viewStudent(): any {
    return this.http.get<any>('http://localhost:8081/admin/viewStudent');
  }
  public getStudentById(id: number): any {
    return this.http.get<any>('http://localhost:8081/admin/getStudent?id=' + id)
  }
}
