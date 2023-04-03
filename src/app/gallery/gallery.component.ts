import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryData :any =[]
  constructor(
    private adminSer : AdminService
  ) { }

  ngOnInit(): void {
        this. getGalleryData()
  }

  getGalleryData(){
      this.adminSer.getGallery().subscribe((res)=>{
        this.galleryData = res
      })
  }

}
