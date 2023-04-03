import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
teacherData :any
bannerData :any
resultData : any
galleryData :any
isTeacher : boolean = false
isBanner : boolean = false
isResult: boolean = false
isGallery :boolean = false
  constructor(
    private adminSer : AdminService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.router.url == "/teacher-list"){
        this.isTeacher = true;
        this.isBanner = false
        this.isResult = false
        this.isGallery = false
        this.getTeachersData()
    }
    if(this.router.url == "/banner-list"){
      this.isTeacher = false;
      this.isBanner = true
      this.isResult = false
      this.isGallery = false
      this.getBannerData()
  }
  if(this.router.url == "/result-list"){
    this.isTeacher = false;
    this.isBanner = false;
    this.isResult = true;
    this.isGallery = false
    this.getResult()
}
if(this.router.url == "/gallery-list"){
  this.isTeacher = false;
  this.isBanner = false;
  this.isResult = false;
  this.isGallery = true
  this.getGalleryData()
}
  }


  getTeachersData(){
    this.adminSer.getTeacher().subscribe((res)=>{
        this.teacherData  = res
    })
  }

  getBannerData(){
    this.adminSer.getBanner().subscribe((res)=>{
      this.bannerData = res
  })
  }

  getGalleryData(){
    this.adminSer.getGallery().subscribe((res)=>{
      this.galleryData = res
  })
  }

  delete(data:any){
    alert("Are you sure you want to delete this image?")
     this.adminSer.deleteTeacher(data._id).subscribe((res)=>{
        this.getTeachersData()
     })
  }


  deleteGallery(data:any){
    alert("Are you sure you want to delete this gallery?")
     this.adminSer.deleteGallery(data._id).subscribe((res)=>{
        this.getGalleryData()
     })
  }

  edit(data:any){
    this.adminSer.editDataBehaviour.next(data) 
    this.router.navigateByUrl("/admin")
  }

  deleteBanner(data:any){
    alert("Are you sure you want to delete this image?")
    this.adminSer.deleteBanner(data._id).subscribe((res)=>{
       this.getBannerData()
    })
  }

  getResult(){
    this.adminSer.getResult().subscribe((res)=>{
      this.resultData = res
  })
}

  deleteResult(data:any){
    alert("Are you sure you want to delete this image?")
    this.adminSer.deleteResult(data._id).subscribe((res)=>{
       this.getResult()
    })
  }
}
