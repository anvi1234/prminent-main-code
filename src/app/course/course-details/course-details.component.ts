import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  url :any
  constructor(
    private router:Router
  ) { 
    this.url = this.router.url
  }

  ngOnInit(): void {
  }

}
