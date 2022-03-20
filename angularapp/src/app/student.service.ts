import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  API='http://localhost:9090';
  public registerCourse(courseData: any){
    return this.http.post(this.API + '/registerCourse',courseData);
  }
  public getCourse(){
    return this.http.get(this.API + '/getCourse');
  }
   public deleteCourse(id:any){
     return this.http.delete(this.API+'/deleteCourse?id='+id);
   }
   public updateCourse(course: any){
     return this.http.put(this.API+'/updateCourse',course);
   }
}
