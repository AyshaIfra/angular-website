import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  isMenuCollapsed = true;

  navItem = {
    "logo": "SKROLLEX",
    "navLink": [
      {"title":"HOME", "href": "#home", "id":"home-link"},
      {"title":"ABOUT", "href": "#about", "id":"about-link"},
      {"title":"TEAM", "href": "#team", "id":"teamt-link"},
      {"title":"SERVICES", "href": "#service", "id":"service-link"},
      {"title":"WORK", "href": "#work", "id":"work-link"},
      {"title":"PROCESS", "href": "#process", "id":"process-link"},
      {"title":"SKILLS", "href": "#skill", "id":"skill-link"},
      {"title":"CONTACT", "href": "#contact", "id":"contact-link"}
    ]
  }

  constructor(private el: ElementRef, private renderer: Renderer2,private router: Router) {}
  
  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
    this.isMenuCollapsed = ! this.isMenuCollapsed
  }

  setActiveLink(linkId: string) {
    this.isMenuCollapsed = true;
  
    const navLinks = this.el.nativeElement.querySelectorAll('.nav-link');

    navLinks.forEach((link: HTMLElement) => {
      if (link.id === linkId) {
        this.renderer.addClass(link, 'active');
      } else {
        this.renderer.removeClass(link, 'active');
      }
    });
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }


  
 
}
