import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-admincourse',
  templateUrl: './admincourse.component.html',
  styleUrls: ['./admincourse.component.css']
})
export class AdmincourseComponent implements OnInit {

  searchKeyword: string = '';
  courses = [];

  constructor(private service: CourseService, private route: Router) { }

  ngOnInit(): void {
    this.showCourse()
  }

  private showCourse() {
    this.service.viewCourse().subscribe(
      (res: any) => { this.courses = res },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Course");
  }

  deleteCourse(id: number) {
    this.service.deleteCourse(id).subscribe(
      (res: any) => { this.showCourse() },
      (err: any) => console.log(err)
    )
  }

  updateCourse(id: number) {
    this.route.navigate(['admin/editCourse', id])
  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }
}
