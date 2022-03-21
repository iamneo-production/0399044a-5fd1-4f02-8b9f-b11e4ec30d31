import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/Service/registration-service.service';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-adminstudent',
  templateUrl: './adminstudent.component.html',
  styleUrls: ['./adminstudent.component.css']
})
export class AdminstudentComponent implements OnInit {

  searchKeyword: string = '';
  students = [];

  constructor(private service: StudentService, private route: Router, private regService: RegistrationServiceService) { }

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

  deleteStudent(id: String) {
    let aid: number = +id
    this.service.deleteStudent(aid).subscribe(
      (res: any) => { this.viewStudent() },
      (err: any) => console.log(err)
    )
    this.regService.deleteStudentByAdmin(aid).subscribe(
      (res: any) => console.log('deleted form registered User table'),
      (err: any) => console.log(err)
    )
  }

  updateStudent(id: number) {
    this.route.navigate(['admin/editStudent', id])
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
