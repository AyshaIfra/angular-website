import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent {
  
  projectCount:number = 0;
  projectCountStop:any = setInterval(()=> {
    this.projectCount++

    if(this.projectCount == 216) {
      clearInterval(this.projectCountStop)
    }
  }, 10)  

}
