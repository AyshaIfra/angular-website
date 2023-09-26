import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {

  who = {
    "button": "VIEW OUR WORK",
    "title": "WHO WE ARE",
    "para_1": "QUISQUE DOLOR LACUS, COMMODO ID HENDRERIT VIVERRA, EUISMOD IN ODIO.",
    "para_2": "Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.",
    "para_3": "Aenean nisi neque, aliquam ut nibh sit amet,finibus sagittis tortor aenean consectetur."
  }
}
