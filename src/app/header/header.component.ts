import { Component, OnInit } from '@angular/core';
// import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

}
