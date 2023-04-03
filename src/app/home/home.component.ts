import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(
    private router:Router
  ) { 
  
  }
  
  course = [
    {id:1,courseName:"CA Foundation Classes",courseSub:"Candidates must have passed 10+2",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog_1.jpg"},
    {id:2,courseName:"CA Intermediate Classes",courseSub:"Candidates must have passed 10+2",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog_2.jpg"},
    {id:3,courseName:"CA Professional Classes",courseSub:"Pass Intermediate both group",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog_3.jpg"},
    {id:4,courseName:"CS EET Classes",courseSub:"Candidates must have passed 10+2",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog_4.jpg"},
    {id:5,courseName:"CS Executive Classes",courseSub:"Candidates must have passed 10+2",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog_5.jpg"},
    {id:6,courseName:"CS Professional Classes",courseSub:"Pass Intermediate both group",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog_6.jpg"},
    {id:7,courseName:"CMA Foundation Classes",courseSub:"Candidates must have passed 10+2",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog_9.jpg"},
    {id:8,courseName:"CMA Intermediate Classes",courseSub:"Candidates must have passed 10+2",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog8.jpg"},
    {id:9,courseName:"CMA Professional Classes",courseSub:"Pass Intermediate both group",footerTitle:"Batches for Hindi & English Medium",img:"../../assets/images/blog9.jpg"},
  ]

  

  ngOnInit(): void {
  }

  
  changePath(item:any){
    if(item.courseName === "CA Foundation Classes"){
      this.router.navigateByUrl("course-detail/ca/foundation")

    }
    if(item.courseName === "CA Intermediate Classes"){
      this.router.navigateByUrl("course-detail/ca/intermediate")
    }
    if(item.courseName === "CA Professional Classes"){
      this.router.navigateByUrl("course-detail/ca/final")
    }
    if(item.courseName === "CS EET Classes"){
      this.router.navigateByUrl("course-detail/cs/foundation")
    }
    if(item.courseName === "CS Executive Classes"){
      this.router.navigateByUrl("course-detail/cs/intermediate")
    }
    if(item.courseName === "CS Professional Classes"){
      this.router.navigateByUrl("course-detail/cs/final")
    }
    if(item.courseName === "CMA Foundation Classes"){
      this.router.navigateByUrl("course-detail/cma/foundation")
    }
    if(item.courseName === "CMA Intermediate Classes"){
      this.router.navigateByUrl("course-detail/cma/intermediate")
    }
    if(item.courseName === "CMA Professional Classes"){
      this.router.navigateByUrl("course-detail/cma/final")
    }
}
  
}
