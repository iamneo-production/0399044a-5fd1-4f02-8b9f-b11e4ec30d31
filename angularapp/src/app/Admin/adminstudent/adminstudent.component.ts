import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-adminstudent',
  templateUrl: './adminstudent.component.html',
  styleUrls: ['./adminstudent.component.css']
})
export class AdminstudentComponent implements OnInit {

  searchKeyword: string = '';
  students = [];

  constructor(private service: StudentService, private route: Router) { }

  ngOnInit(): void {
    this.viewStudent()
  }

  private viewStudent() {
    this.service.viewStudent().subscribe(
      (res: any) => { this.students = res },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Academy");
  }

  deleteStudent(id: number) {
    this.service.deleteStudent(id).subscribe(
      (res: any) => { this.viewStudent() },
      (err: any) => console.log(err)
    )
  }

  updateStudent(id: number) {
    this.route.navigate(['admin/editStudent', id])
  }

}
