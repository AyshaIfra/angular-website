import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  @Output() sectionId = new EventEmitter()

  constructor(private roter: Router) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  
  toggle(event:any) {
    this.sectionId.emit(event.target.id)
  }
  navigagte(url:any){
      this.roter.navigate([url]);
  }
}
