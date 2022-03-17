import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public addCourse(course: Course): any {
    return this.http.post<any>('http://localhost:8081/admin/addCourse', course);
  }

  public updateCourse(course: Course): any {
    return this.http.put<any>('http://localhost:8081/admin/updateCourse', course);
  }

  public deleteCourse(id: number): any {
    return this.http.delete<any>('http://localhost:8081/admin/deleteCourse?id=' + id);
  }

  public viewCourse(): any {
    return this.http.get<any>('http://localhost:8081/admin/viewCourse');
  }
  public getCourseById(id: number): any {
    return this.http.get<any>('http://localhost:8081/admin/getCourse?id=' + id)
  }
}
