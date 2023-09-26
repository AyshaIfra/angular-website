import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team = {
    "team": "TEAM",
    "sub_title": "WHO WE ARE",
    "paragraph": " Our success depends on the strength of our team. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation.",
    "grid_items": [
      {
        "image": "/assets/images/team/1.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "name": "MIKE JOHNSON",
        "position": "CEO & Founder"
      },
      {
        "image": "/assets/images/team/2.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "name": "JESSICA SPECTER",
        "position": "Creative Director"
      },
      {
        "image": "/assets/images/team/3.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "name": "ANDREW MILES",
        "position": "Developer"
      },
      {
        "image": "/assets/images/team/4.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "name": "LYNDA SMITH",
        "position": "Programmer"
      }
    ],
    "sub_title_2": "WE WANT TO CHANGE PEOPLES LIVES",
    "paragraph_2": "Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
