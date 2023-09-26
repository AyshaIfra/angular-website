import { Component } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent {


  howWork = {
    "title": "HOW WE WORK",
    "paragraph": "Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.",
    "grids_items": [
      {
        "icon": "fa fa-eye",
        "text": "AWESOME",
        "para": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur."
      },
      {
        "icon": "fa fa-thumbs-o-up",
        "text": "INNOVATIVE",
        "para": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur."
      },
      {
        "icon": "fa fa-paper-plane-o",
        "text": "CREATIVE",
        "para": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur."
      },
      {
        "icon": "fa fa-flask",
        "text": "EXPERIMENTAL",
        "para": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur."
      }
    ]
  }

}
