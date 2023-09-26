import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('typewriter', { static: true }) typewriterElement!: ElementRef;


  home = {
    "animation": [
      "We Are Developers",
      "We Are Creative",
      "We Are Designers",
      "We Are Programmers",
      "We Are Coders"
    ],
    "title": "SKROLLEX",
    "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam nec ante tristique elit interdum ullamcorper. Consectetur aenean porta nibh sit amet aliquet pellentesque.",
    "button_1": "ABOUT US",
    "button_2": "OUR WORK"
  }

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: this.home.animation,
      typeSpeed: 77, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      backDelay: 100, // delay before starting to backspace
      startDelay: 1000, // delay before starting to type
      showCursor: false,
      loop: true // loop the animation
    };

    const typed = new Typed(this.typewriterElement.nativeElement, options);
  }

}
