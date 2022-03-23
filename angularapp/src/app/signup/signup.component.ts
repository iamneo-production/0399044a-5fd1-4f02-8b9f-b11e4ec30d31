import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../Model/student';
import { User } from '../Model/user';
import { RegistrationServiceService } from '../Service/registration-service.service';
import { StudentService } from '../Service/student.service';
;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  student: Student = new Student();

  signup: any = FormGroup;


  constructor(private studentService: StudentService, private fb: FormBuilder, private route: Router, private service: RegistrationServiceService) { }

  ngOnInit(): void {
    this.signup = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.required],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      password: ['', Validators.required],
      re_password: ['', Validators.required],
      type: ['', Validators.required]

    })
  }


  signupSubmit() {
    if (this.user.password === this.user.re_password) {

      if (this.user.type === 'user') {
        this.service.signupUser(this.user).subscribe({
          next: (res) => {
            this.student.studentId = res.id
            this.student.studentName = res.userName;
            this.student.mobileNumber = res.mobileNo;
            this.studentService.addStudent(this.student).subscribe({
              next: (responce: any) => {
                alert('User Registered')
                localStorage.setItem('value', responce);
                this.route.navigateByUrl('/login');
              }
            })

          },
          error: (err) => console.log(err)
        })
      }
      else if (this.user.type === 'admin') {
        this.service.signupAdmin(this.user).subscribe({
          next: (res) => {
            alert('Admin Registered')
            localStorage.setItem('value', res);;
            this.route.navigateByUrl('/login')
          },
          error: (err) => console.log(err)
        })
      }
    } else {
      alert('Password Mismatch')
    }


  }
}
