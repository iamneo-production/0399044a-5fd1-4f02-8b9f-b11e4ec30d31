import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yogafrontend';
  courseDetails:any ;

  studentToUpdate={
    courseid:"",
    coursename:"",
    courseduration:"",
    coursetimings:"",
    noofstudents:"",
    coursedescription:""
  };
  constructor(private studentService: StudentService){
    this.getCourseDetails();
  }
  register(registerForm: NgForm){
    this.studentService.registerCourse(registerForm.value).subscribe(
      (resp) =>{
        console.log(resp);
        registerForm.reset();
        this.getCourseDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  getCourseDetails(){
    this.studentService.getCourse().subscribe(
      (resp)=>{
        console.log(resp);
        this.courseDetails =resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  deleteCourse(course: { courseid: any; }){
    this.studentService.deleteCourse(course.courseid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getCourseDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  edit(course: { courseid: string;
    coursename: string;
    courseduration: string;
    coursetimings: string;
    noofstudents: string;
    coursedescription: string; }){
    this.studentToUpdate=course;
  }

  updateStudent(){
    this.studentService.updateCourse(this.studentToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
