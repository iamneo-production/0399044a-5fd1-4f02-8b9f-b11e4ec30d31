import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Service/course.service';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  searchKeyword: String = '';
  id!: number
  courses = [];
  constructor(private courseService: CourseService, private studentService: StudentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.showCourse();
  }

  public showCourse() {
    this.courseService.viewCourse().subscribe(
      (res: any) => { this.courses = res },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Course")
  }

  enroll(id: number) {
    this.courseService.getCourseById(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.studentService.getStudentById(this.id).subscribe({
          next: (res: any) => console.log(res),
          error: (err: any) => console.log(err)
        })
      },
      error: (err: any) => console.log(err)
    })

  }

}
