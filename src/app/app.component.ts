import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'skrollex';
  id:any;

  constructor() { }

  ngOnInit(): void {
  }

  getId(id:any) {
   this.id = id
   console.log(id)
  }
}
