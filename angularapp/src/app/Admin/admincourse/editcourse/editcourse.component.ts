import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  course: Course = new Course();
  id!: number;

  constructor(private service: CourseService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getCourseById(this.id).subscribe(
      (data: any) => this.course = data,
      (error: any) => console.log(error)
    )
  }

  submitEditCourse() {
    this.service.updateCourse(this.course).subscribe(
      (data: any) => { this.route.navigateByUrl('admin/course') },
      (error: any) => console.log(error)
    )
  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }
}
