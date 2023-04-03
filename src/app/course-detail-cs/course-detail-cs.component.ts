import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-detail-cs',
  templateUrl: './course-detail-cs.component.html',
  styleUrls: ['./course-detail-cs.component.css']
})
export class CourseDetailCsComponent implements OnInit {
  url :any
  constructor(
    private router:Router
  ) { 
    this.url = this.router.url
  }

  ngOnInit(): void {
  }

}
