import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { RegistrationServiceService } from '../Service/registration-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private fb: FormBuilder, private route: Router, private service: RegistrationServiceService) { }

  login: any = FormGroup;

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }


  loginSubmit() {
    let person: User
    this.service.getType(this.user).subscribe({
      next: (res: any) => {
        if (res === null) {
          alert('Register Yourself And Login')
        } else {
          person = res;
          if (person.type === 'admin') {
            this.service.loginAdminFromRemote(this.user, person.type).subscribe({
              next: (res: any) => {
                sessionStorage.setItem('value', res);
                this.route.navigateByUrl('admin/academy')
              },
              error: (err: any) => console.log(err)
            });
          }
          else if (person.type === 'user') {
            this.service.loginUserFromRemote(this.user, person.type).subscribe({
              next: (res: any) => {
                sessionStorage.setItem('value', res);
                this.route.navigate(['user/academy', person.id])
              },
              error: (err: any) => console.log(err)
            });
          }
        }
      },
      error: (err: any) => console.log(err)
    });
  }

}

