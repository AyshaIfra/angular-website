import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  isMenuCollapsed = true;
  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
    this.isMenuCollapsed = ! this.isMenuCollapsed
  }

  setActiveLink(linkId: string) {
    this.isMenuCollapsed = true;
    console.log(this.isMenuCollapsed)
    const navLinks = this.el.nativeElement.querySelectorAll('.nav-link');

    navLinks.forEach((link: HTMLElement) => {
      if (link.id === linkId) {
        this.renderer.addClass(link, 'active');
      } else {
        this.renderer.removeClass(link, 'active');
      }
    });
  }
 
}
