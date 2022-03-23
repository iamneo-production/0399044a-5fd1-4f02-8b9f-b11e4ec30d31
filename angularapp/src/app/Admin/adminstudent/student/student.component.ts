import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student = new Student();
  address = {
    houseNo: '',
    streetName: '',
    areaName: '',
    state: '',
    nationality: '',
    pincode: ''
  }

  constructor(private route: Router, private router: Router, private service: StudentService) { }

  ngOnInit(): void {

  }

  studentForm = new FormGroup({
    StudentName: new FormControl(),
    StudentDOB: new FormControl(),
    MobileNo: new FormControl(),
    Age: new FormControl(),
    houseNo: new FormControl(),
    street: new FormControl(),
    area: new FormControl(),
    state: new FormControl(),
    nation: new FormControl(),
    pincode: new FormControl(),
  })

  onSubmit() {
    if (this.studentForm.get('houseNo')?.value !== null && this.studentForm.get('street')?.value !== null && this.studentForm.get('area')?.value !== null && this.studentForm.get('state')?.value !== null && this.studentForm.get('nation')?.value !== null && this.studentForm.get('pincode')?.value !== null) {
      this.address.houseNo = this.studentForm.get('houseNo')?.value
      this.address.streetName = this.studentForm.get('street')?.value
      this.address.areaName = this.studentForm.get('area')?.value
      this.address.state = this.studentForm.get('state')?.value
      this.address.nationality = this.studentForm.get('nation')?.value
      this.address.pincode = this.studentForm.get('pincode')?.value

      var newAddress = this.address.houseNo + " " + this.address.streetName + " " + this.address.areaName + " " + this.address.state + " " + this.address.nationality + " " + this.address.pincode
      this.student.address = newAddress

      if (this.studentForm.get('StudentName')?.value !== null && this.studentForm.get('StudentDOB')?.value !== null && this.studentForm.get('MobileNo')?.value !== null && this.studentForm.get('Age')?.value !== null) {
        this.student.studentName = this.studentForm.get('StudentName')?.value
        this.student.studentDOB = this.studentForm.get('StudentDOB')?.value
        this.student.mobileNumber = this.studentForm.get('MobileNo')?.value
        this.student.age = this.studentForm.get('Age')?.value
        console.log(this.student)
        this.service.addStudent(this.student).subscribe({
          next: (res: any) => this.router.navigateByUrl('/admin/student'),
          error: (err: any) => console.log(err)
        })

      }
    } else {
      alert('Fill all fields')
    }

  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }



}
