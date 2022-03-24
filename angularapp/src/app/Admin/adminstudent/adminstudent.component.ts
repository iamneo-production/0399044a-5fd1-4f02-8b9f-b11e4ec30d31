import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmissionService } from 'src/app/Service/admission.service';
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
  courseName = ''


  enrolledStudent = [];


  constructor(private service: StudentService, private admissionService: AdmissionService, private route: Router, private regService: RegistrationServiceService) { }

  ngOnInit(): void {
    this.viewStudent()
  }

  private viewStudent() {
    this.service.viewStudent().subscribe(
      (res: any) => { this.students = res },
      (err: any) => console.log(err)
    )
    this.admissionService.viewAdmission().subscribe(
      (res: any) => {
        this.enrolledStudent = res;
        for (let i = 0; i < this.enrolledStudent.length; i++) {
          const sample: any = this.enrolledStudent[i]
          for (let j = 0; j < this.students.length; j++) {
            const exp: any = this.students[j]
            if (sample.studentId === exp.studentId) {
              exp.enrolledCourse = sample.courseName
            }
          }
        }
      },
      (err: any) => console.log(err)
    )
  }

  search() {
    alert("Search Not Found, Search for Appropriate Student");
  }

  deleteStudent(id: String) {
    let aid: number = +id
    this.service.getStudentById(aid).subscribe(
      (res: any) => {
        this.service.deleteStudent(res.id).subscribe(
          (res: any) => this.viewStudent(),
          (err: any) => console.log(err)
        )
      },
      (err: any) => console.log(err)
    )
    this.regService.deleteStudentByAdmin(aid).subscribe(
      (res: any) => alert('Student Deleted'),
      (err: any) => console.log(err)
    )
  }

  updateStudent(id: number) {
    this.route.navigate(['admin/editStudent', id])
  }

  sessionLogout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
