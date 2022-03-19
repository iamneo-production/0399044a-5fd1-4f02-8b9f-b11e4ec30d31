import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {

  id!: number

  courses = [
    {
      name: 'helath',
      time: "5 - 6",
    },
    {
      name: 'helath',
      time: "5 - 6",
    },
    {
      name: 'helath',
      time: "5 - 6",
    },
    {
      name: 'helath',
      time: "5 - 6",
    },
  ]

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  }

  delete() {
    console.log("delete")
  }

}
