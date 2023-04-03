import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  showCarousel = true;
  banner:any

  constructor(config: NgbCarouselConfig,
        private adminSer: AdminService
    ) {
    // customize default values of carousels used by this component tree
    // config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }
  ngOnInit(): void {
    this.getBanner()
}

getBanner(){
  this.adminSer.getBanner().subscribe((res)=>{
    this.banner = res;
    console.log("sdjfgdsjfs",this.banner)
  })
}


event_list = [
  {
    event:' Event 1',
    eventLocation:'Bangalore',
    eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
    img: 'https://picsum.photos/900/500?random&t=1',
    eventStartDate: new Date('2019/05/20'),
    eventEndingDate: new Date('2019/05/24')
  },
   {
    event:' Event 2',
    eventLocation:'Dubai',
    eventDescription:'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
    img: 'https://picsum.photos/900/500?random&t=3',
    eventStartDate: new Date('2019/07/28'),
    eventEndingDate: new Date('2019/07/30')
  },
   
]

}
