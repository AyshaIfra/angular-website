import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutContent = {
    "row_1": [
      {
        "content": "RESPONSIVE",
        "text": "LAYOUT"
      },
      {
        "content": "PARALLAX",
        "text": "EFFECTS"
      },
      {
        "content": "BOOTSTRAP",
        "text": "FRAMEWORK"
      }
    ],
    "row_2": [
      {
        "para_1": "Responsive Styling",
        "para_2": "Retina Ready"
      },
      {
        "para_1": "Highly Optimized",
        "para_2": "Smooth Animations"
      },
      {
        "para_1": "Adapted for Multicolor Sections",
        "para_2": "Highly Customized"
      }
    ],
    "about": "ABOUT",
    "sub_title": "WE CREATE AWESOME STUFF",
    "paragraph": "We are Creative Team located in Kalura, Bovlandia. Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "grid_elemets": [
      {
        "svg": "",
        "title": "WEB DEVELOPMENT",
        "para": "Praesent sodales, quam vitae gravida interdum, ex mibibendum enim, sit amet tristique miquam vel odio. Donec non nunc condimentum, hendrerit elit sed, condimentum magna. Suspendisse imperdiet purus vel ornare cursus."
      },
      {
        "svg": "",
        "title": "INTERNET MARKETING",
        "para": "Curabitur et diam elementum, mollis tortor a, malesuada turpis.Vivamus gravida, justo et molestie sollicitudin, erat lorem tempus eros, vel laoreet nibh urna ac nunc, vestibulum neque vitae pellentesque efficitur."
      },
      {
        "svg": "",
        "title": "CLIENT SUPPORT",
        "para": "Sed porta erat vel ipsum maximus, eget maximus est maximus. Maecenas at venenatis nibh, sitamet suscipit odio. In feugiat vehicula dui.In felis enim, maximus a dolor semper efficitur elit euismod magna quis commodo."
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
