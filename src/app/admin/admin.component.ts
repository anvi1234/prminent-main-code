import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Banner } from '../modal/banner.modal';
import { Teachers } from '../modal/teacher.modal';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { AdminService } from '../shared/admin.service';
import { Router } from '@angular/router';
import { Result } from '../modal/result.modal';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public TeacherFormModel:Teachers = new Teachers();
  isLoader :  boolean = false
  public bannerFormModal:Banner = new Banner();
  public ResultFormModal:Result = new Result();
  isTeacher : boolean = false;
  isBanner : boolean = false
  isResult : boolean = false
  isGallery : boolean = false
  downloadURL: Observable<string>;
  GlobalId:any
  isUpdate : boolean = false
  fb:any
  tb:any
  rb:any
  gb:any
  constructor(
    private storage: AngularFireStorage,
    private adminSer: AdminService,
    private router : Router,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.adminSer.editDataBehaviour.subscribe((res:any)=>{
      if(res){
        this.isUpdate = true
        this.isTeacher = true
        this.GlobalId = res._id
        this.TeacherFormModel = res;
      }
    })
  }

  onbannerFileChange(event:any) {
     this.isLoader = true;  
     var n = Date.now();
     const file = event.target.files[0];
     const filePath = `banner/${n}`;
     const fileRef = this.storage.ref(filePath);
     const task = this.storage.upload(`banner/${n}`, file);
     task
       .snapshotChanges()
       .pipe(
         finalize(() => {
           this.downloadURL = fileRef.getDownloadURL();
           this.downloadURL.subscribe(url => {
             if (url) {
               this.fb = url;
               this.isLoader = false 
             }
             
           });
         })
       )
       .subscribe(url => {
         if (url) {
           console.log(url);
         }
       });
   }

   onTeacherFileChange(event:any) {
    this.isLoader = true  
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `teacher/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`teacher/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.tb = url;
              this.isLoader = false 
            }
            
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
 
   onSubmitBanner(){
    if(this.fb){
      let obj = {
        fireBaseUrl : this.fb
      }
      this.adminSer.addBanner(obj).subscribe((res)=>{
        alert("Banner added Successfully")
        this.router.navigateByUrl("/banner-list")
        this.bannerFormModal = new Banner()
      })
    }
   
   }

   onSubmitTecher()
{
  if(this.tb){
    let obj = {
      name:this.TeacherFormModel.name,
      fireBaseUrl :this.tb,
      description:this.TeacherFormModel.description,
      position:this.TeacherFormModel.position
    }
   
    this.adminSer.addTeacher(obj).subscribe((res)=>{
      alert("Teacher added Successfully")
      this.router.navigateByUrl("/teacher-list")
     this.TeacherFormModel = new Teachers()
    })
    
  }


}


onUpdateTecher(){
  this.adminSer.updateTeacher(this.GlobalId,this.TeacherFormModel).subscribe((res:any)=>{
    this.TeacherFormModel = new Teachers()
   })
}

showTecher(){
 this.isTeacher = !this.isTeacher;
 this.isBanner = false
 this.isResult = false
 this. isGallery  = false
}
showBanner(){
  this.isTeacher = false;
  this.isBanner = !this.isBanner
  this.isResult = false;
  this. isGallery  = false
}

showResult(){
  this.isTeacher = false;
  this.isBanner = false;
  this. isGallery  = false
  this.isResult = !this.isResult
}
showGallery(){
  this. isGallery  = !this.isGallery
  this.isTeacher = false;
  this.isBanner = false;
  this.isResult = false
}

bannerRedire(){
 this.router.navigateByUrl("/banner-list")
}
TeacherRedire(){
  this.router.navigateByUrl("/teacher-list")
}
ResultRedire(){
  this.router.navigateByUrl("/result-list")
}

galleryRedire(){
  this.router.navigateByUrl("/gallery-list")
}

onResultFileChange(event:any){
  this.isLoader = true    
  var n = Date.now();
  const file = event.target.files[0];
  const filePath = `result/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`result/${n}`, file);
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.rb = url;
            this.isLoader = false;  
          }
          
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
}

onSubmitResult(){
  
  if(this.rb){
    let obj = {
      fireBaseUrl : this.rb
    }
   this.adminSer.addResult(obj).subscribe((res)=>{
      alert("Result image added Successfully")
      this.router.navigateByUrl("/result-list")
      this.ResultFormModal = new Banner()
    })
  }
 
 }

 onGalleryFileChange(event:any){
  this.isLoader = true  
  var n = Date.now();
  const file = event.target.files[0];
  const filePath = `gallery/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`gallery/${n}`, file);
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.gb = url;
            this.isLoader = false
          }
          
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
 }

 onGalleryResult(){
  if(this.gb){
    let obj = {
      fireBaseUrl : this.gb
    }
   this.adminSer.addGallery(obj).subscribe((res)=>{
      alert("Result image added Successfully")
      this.router.navigateByUrl("/gallery-list")
      this.ResultFormModal = new Banner()
    })
  }
 }
}
