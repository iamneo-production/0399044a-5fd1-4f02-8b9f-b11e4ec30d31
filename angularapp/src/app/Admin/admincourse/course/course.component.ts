import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  course: Course = new Course();

  constructor(private route: Router, private service: CourseService) { }

  ngOnInit(): void {

  }

  reactiveForm = new FormGroup({
    nameOfCourse: new FormControl(['', Validators.required]),
    spanOfCourse: new FormControl(['', Validators.required]),
    timeOfCourse: new FormControl(['', Validators.required]),
    countOfStudent: new FormControl(['', Validators.required]),
    descriptionOfCourse: new FormControl(['', Validators.required])

  })

  submitAddCourse() {
    console.log(this.course);
    this.service.addCourse(this.course).subscribe({
      next: () => this.route.navigateByUrl('admin/course'),
      error: (err: any) => console.log(err)

    })

  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }
}
