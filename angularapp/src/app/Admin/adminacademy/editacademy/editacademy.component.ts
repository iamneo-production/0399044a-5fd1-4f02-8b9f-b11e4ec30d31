import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Academy } from 'src/app/Model/academy';
import { AcademyService } from 'src/app/Service/academy.service';

@Component({
  selector: 'app-editacademy',
  templateUrl: './editacademy.component.html',
  styleUrls: ['./editacademy.component.css']
})
export class EditacademyComponent implements OnInit {

  academy: Academy = new Academy();
  id!: number
  constructor(private service: AcademyService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.service.getAcademyById(this.id).subscribe(
      (data: any) => this.academy = data,
      (error: any) => console.log(error)
    )
  }

  submitEditAcademy() {
    this.service.updateAcademy(this.academy).subscribe(
      (data: any) => { this.route.navigateByUrl('admin/academy') },
      (error: any) => console.log(error)
    )
  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
