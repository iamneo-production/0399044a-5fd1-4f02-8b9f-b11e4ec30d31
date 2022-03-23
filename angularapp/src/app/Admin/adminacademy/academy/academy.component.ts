import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Academy } from 'src/app/Model/academy';
import { AcademyService } from 'src/app/Service/academy.service';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {

  academy: Academy = new Academy();

  addAcademy: any = FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private service: AcademyService) { }

  ngOnInit(): void {
    this.addAcademy = this.fb.group({
      AcademyName: ['', Validators.required],
      ContactNumber: ['', Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      ImageUrl: ['', Validators.required],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Location: ['', Validators.required],
      Description: ['']
    })
  }

  submitAddAcademy() {
    console.log(this.academy);
    this.service.addAcademy(this.academy).subscribe({
      next: (res: any) => this.route.navigateByUrl('admin/academy'),
      error: (err: any) => console.log(err)

    })

  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
