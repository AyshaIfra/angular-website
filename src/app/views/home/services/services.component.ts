import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild('typewriter', { static: true }) typewriterElement!: ElementRef;

  services = {
    "title": "SERVICES",
    "sub_title": "WE ARE HERE FOR YOU",
    "main_para": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "grid_items": [
      {
        "title": "WEB DESIGN",
        "sub_title": "Duis ipsum dolor sit amet incididunt ut labore et dolore magna.",
        "para": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        "list": [
          "Responsive design",
          "Template development",
          "Rich media banners",
          "Frontend development",
          "Backend development",
          "Content creation",
          "Content audit",
          "Copywriting",
          "Photography"
        ]
      },
      {
        "title": "INTERNET MARKETING",
        "sub_title": "Excepteur ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
        "para": "Excepteur sint occaecat elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        "list": [
          "Facebook advertising",
          "SEO and SEM",
          "Facebook apps",
          "Context advertising",
          "Rich media banners",
          "Game development",
          "Content creation",
          "Testing"
        ]
      },
      {
        "title": "DIGITAL PRODUCTION",
        "sub_title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod consequat.",
        "para": "Duis aute irure elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "list": [
          "Rich media banners",
          "Audio production",
          "Photography",
          "Design",
          "Content creation",
          "Content audit",
          "Project management",
          "Technical requirements",
          "Testing"
        ]
      },
      {
        "title": "APPLICATION DEVELOPMENT",
        "sub_title": "Commodo ipsum dolor sit amet dolore magna aliqua.",
        "para": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        "list": [
          "Facebook apps",
          "Brand immersion & research",
          "Competitive analysis",
          "Stakeholder interviews",
          "Content audit",
          "Project/platform planning",
          "Technical requirements",
          "Testing"
        ]
      }
    ],
    "typewriter": [
      "We Are Developers",
      "We Are Creative",
      "We Are Designers",
      "We Are Programmers",
      "We Are Coders"
    ],
    "text_bottom": "— Lorem ipsum dolor sit amet —"
  }

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: [
        'We Are Developers',
        'We Are Creative',
        'We Are Designers',
        'We Are Programmers',
        'We Are Coders'
      ],
      typeSpeed: 500, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      backDelay: 100, // delay before starting to backspace
      startDelay: 1000, // delay before starting to type
      showCursor: false,
      loop: true // loop the animation
    };

    const typed = new Typed(this.typewriterElement.nativeElement, options);
  }

}
