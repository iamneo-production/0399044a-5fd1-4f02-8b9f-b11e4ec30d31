import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademyService } from 'src/app/Service/academy.service';


@Component({
  selector: 'app-adminacademy',
  templateUrl: './adminacademy.component.html',
  styleUrls: ['./adminacademy.component.css']
})
export class AdminacademyComponent implements OnInit {

  searchKeyword: String = '';
  academies = []
  constructor(private service: AcademyService, private route: Router) { }

  ngOnInit(): void {
    this.showAcademy();
  }

  private showAcademy() {
    this.service.viewAcademy().subscribe({
      next: (res: any) => { this.academies = res },
      error: (err: any) => console.log(err)
    })
  }
  search() {
    alert("Search Not Found, Search for Appropriate Academy");
  }

  deleteAcademy(id: number) {
    this.service.deleteAcademy(id).subscribe(
      (res: any) => { console.log(res); this.showAcademy() },
      (err: any) => console.log(err)
    )
  }

  updateAcademy(id: number) {
    this.route.navigate(['admin/editAcademy', id])
  }

  logout() {
    sessionStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
