import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  student: Student = new Student()
  id!: number

  constructor(private service: StudentService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getStudentById(this.id).subscribe(
      (data: any) => { this.student = data },
      (error: any) => console.log(error)
    )
  }

  submitEditStudent() {
    this.service.updateStudent(this.student).subscribe(
      (data: any) => { this.route.navigateByUrl('admin/student') },
      (error: any) => console.log(error)
    )
  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
