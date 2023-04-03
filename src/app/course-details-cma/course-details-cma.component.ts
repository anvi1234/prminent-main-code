import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details-cma',
  templateUrl: './course-details-cma.component.html',
  styleUrls: ['./course-details-cma.component.css']
})
export class CourseDetailsCmaComponent implements OnInit {
  url :any
  constructor(
    private router:Router
  ) {
    this.url = this.router.url
   }

  ngOnInit(): void {
  }

}
