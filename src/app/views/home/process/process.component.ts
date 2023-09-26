import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  @Input() sectionId!: string;

  process = {
    "title": "OUR PROCESS",
    "sub_title": "WE MAKE OUR CUSTOMERS HAPPY",
    "paragraph": "Curabitur eget nulla ut neque aliquam dictum. Nam sollicitudin leo dui, non malesuada felis aliquam non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus finibus tempor neque vel scelerisque. Cras nec ex ut eleifend mollis ut a nibh. Vivamus commodo est sit amet ultricies.",
    "grid_items": [
      {
        "icon": "fa fa-search",
        "title": "RESEARCH",
        "paragraph": "Vestibulum placerat, ipsum vel mollis ornare, libero ex dapibus diam, gravida tempor."
      },
      {
        "icon": "fa fa-pencil",
        "title": "CONCEPT",
        "paragraph": "Vestibulum placerat, ipsum vel mollis ornare, libero ex dapibus diam, gravida tempor."
      },
      {
        "icon": "fa fa-gear",
        "title": "DEVELOP",
        "paragraph": "Vestibulum placerat, ipsum vel mollis ornare, libero ex dapibus diam, gravida tempor."
      },
      {
        "icon": "fa fa-send-o",
        "title": "TEST",
        "paragraph": "Vestibulum placerat, ipsum vel mollis ornare, libero ex dapibus diam, gravida tempor."
      }
    ],
    "bottom_paragraph": "Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
