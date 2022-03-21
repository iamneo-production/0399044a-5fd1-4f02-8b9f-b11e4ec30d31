import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionService } from 'src/app/Service/admission.service';

@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {

  id!: number

  Admissions: any = [];

  constructor(private route: Router, private router: ActivatedRoute, private service: AdmissionService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.viewCourses()
  }

  private viewCourses() {
    this.service.viewAdmission().subscribe({
      next: (res: any) => { this.Admissions = res },
      error: (err: any) => console.log(err)
    })
  }

  delete(id: number) {
    this.service.deleteAdmission(id).subscribe({
      next: (res: any) => this.viewCourses(),
      error: (err: any) => console.log('Course Not Deleted')
    })
  }

  logout() {
    localStorage.removeItem('value');
    this.route.navigateByUrl('/login')
  }

}
