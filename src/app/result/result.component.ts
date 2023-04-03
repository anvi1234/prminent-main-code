import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
url:any
  constructor(
    private admiunSer :AdminService
  ) { 
     
  }

  ngOnInit(): void {
    this.getResult()
  }

  getResult(){
this.admiunSer.getResult().subscribe((Res:any)=>{
  console.log("sdfhskdfs",Res)
  this.url = Res
 
})
  }
}
