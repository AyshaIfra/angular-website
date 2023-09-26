import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  footer = {
    "grid_items": [
      {
        "title": "SKROLLEX",
        "content": "Mauris metus tellus, lacinia nec efficitur quis, rhoncus et mi."
      },
      {
        "title": "ADDITIONAL LINKS",
        "list": [
          "Documentation",
          "Blog",
          "How We Work",
          "Who We Are",
          "Our Numbers"
        ]
      },
      {
        "title": "RECENT POSTS",
        "content": [
          "Post with Featured Image",
          "And Post with Slider",
          "Post with Vimeo Video",
          "Another Post with Image"
        ]
      },
      {
        "title": "PHOTO STREAM",
        "image": [
          "/assets/images/footer/1.jpg",
          "/assets/images/footer/2.jpg",
          "/assets/images/footer/3.jpg",
          "/assets/images/footer/4.jpg",
          "/assets/images/footer/5.jpg",
          "/assets/images/footer/6.jpg"
        ]
      }
    ],
    "bottom_text": "© 2023 All Rights Reserved. Credits."
  }

  ngOnInit(): void {
  }

}
