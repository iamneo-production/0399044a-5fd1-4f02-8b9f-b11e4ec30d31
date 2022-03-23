import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademyService } from 'src/app/Service/academy.service';

@Component({
  selector: 'app-viewacademy',
  templateUrl: './viewacademy.component.html',
  styleUrls: ['./viewacademy.component.css']
})
export class ViewacademyComponent implements OnInit {

  searchKeyword: String = '';
  academies = [];
  id!: number

  constructor(private route: Router, private service: AcademyService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.showAcademies()
  }

  public showAcademies() {
    this.service.viewAcademy().subscribe({
      next: (res: any) => { this.academies = res },
      error: (err: any) => console.log(err)
    })
  }

  search() {
    alert("Search Not Found, Search for Appropriate Academy");
  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
