import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact = {
    "title": "CONTACT",
    "sub_title": "KEEP IN TOUCH",
    "email_1": "info@ouraddress.com",
    "email_2": "www.ouraddress.com"
  }

}
