import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild('typewriter', { static: true }) typewriterElement!: ElementRef;

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
