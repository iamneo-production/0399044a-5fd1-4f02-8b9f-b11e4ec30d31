import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  searchKeyword: String = '';
  courses = [];
  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.showCourse();
  }

  public showCourse() {
    this.service.viewCourse().subscribe(
      (res: any) => { this.courses = res },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Course")
  }

  enroll(id: number) {

  }

}
