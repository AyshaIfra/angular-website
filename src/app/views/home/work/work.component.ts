import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  work = {
    "title": "OUR WORK",
    "sub_title": "OME RECENT PROJECTS",
    "paragraph": "Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "tab_content": [
      "ALL",
      "WEB",
      "VEDIO",
      "PHOTOGRAPHY",
      "DESIGN"
    ],
    "all": [
      {
        "image": "/assets/images/work/1.jpg",
        "text": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/2.jpg",
        "text": "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/3.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/4.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/5.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/6.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/7.jpg",
        "text": ""
      },
      "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur.",
      {
        "image": "/assets/images/work/8.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/9.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/10.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/11.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/12.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      }
    ],
    "web": [
      {
        "image": "/assets/images/work/1.jpg",
        "text": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/2.jpg",
        "text": "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/3.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/4.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/5.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/6.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/7.jpg",
        "text": ""
      },
      "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur.",
      {
        "image": "/assets/images/work/8.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      }
    ],
    "photography": [
      {
        "image": "/assets/images/work/2.jpg",
        "text": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/4.jpg",
        "text": "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/3.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/1.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      }
    ],
    "design": [
      {
        "image": "/assets/images/work/2.jpg",
        "text": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/3.jpg",
        "text": "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/1.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/4.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/6.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/5.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/8.jpg",
        "text":  "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        "image": "/assets/images/work/7.jpg",
        "text": "Duis aute irure dolor in reprehenderit in voluptate tvelit esse cillum dolore eu fugiat nulla pariatur."
      }
    ]
  }
  
  isCollapsed=false;
  constructor() { }

  ngOnInit(): void {
  }

}
