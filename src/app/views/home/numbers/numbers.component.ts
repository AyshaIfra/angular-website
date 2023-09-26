import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent {
  
  projectCount:number = 0;
  clientCount:number = 0;
  followers:number = 0;
  years:number = 0

  projectCountStop:any = setInterval(()=> {
    this.projectCount++
    if(this.projectCount == 216) {
      clearInterval(this.projectCountStop)
    }
  }, 10)  

  clientCountStop:any = setInterval(()=> {
    this.clientCount++
    if(this.clientCount == 120) {
      clearInterval(this.clientCountStop)
    }
  }, 10) 

  followersStop:any = setInterval(()=> {
    this.followers++
    if(this.followers == 120) {
      clearInterval(this.followersStop)
    }
  }, 10)

  yearsStop:any = setInterval(()=> {
    this.years++
    if(this.years == 120) {
      clearInterval(this.yearsStop)
    }
  }, 10)


  numbers = {
    "title": "OUR NUMBERS",
    "sub_title": "SOME OF THE COOL FACTS ABOUT US",
    "grid_items": [
      {
        "value": "216",
        "text": "PROJECTS"
      },
      {
        "value": "120",
        "text": "CLIENTS"
      },
      {
        "value": "3459",
        "text": "FOLLOWERS"
      },
      {
        "value": "7",
        "text": "YEARS"
      }
    ],
    "bottom_text": "Donec vulputate sit amet dolor vel pharetra donec pharetra."
  }

}
