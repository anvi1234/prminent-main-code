import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { isLegacyAndroidBuildOutputFile } from '@ionic/cli';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
   data:any = []
  constructor(
    private adminSer: AdminService
  ) { 
   
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.adminSer.getTeacher().subscribe((res:any)=>{
      this.data = res.sort((a:any,b:any)=>{
        return a.position - b.position
      })

      
    })
  }

}



