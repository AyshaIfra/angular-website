import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  skills = {
    "title": "OUR SKILLS",
    "sub_title": "OUR MAIN SKILLS",
    "paragraph": "liquam scelerisque vestibulum mi, eu commodo sem vestibulum convallis. Proin sed mi vehicula, porta nisi eu, facilisis nisl. Etiam tristique mi nec fermentum vestibulum. Nullam in nisi ut tellus laoreet ultrices. In ullamcorper dictum interdum vestibulum etiam tristique mi nec fermentum commodo sem vestibulum laoreet ultrices.",
    "tabs": [
      {
        "title": "HTML5",
        "content": "Fusce123 hendrerit enim et lacus rutrum, fermentum consectetur mauris hendrerit. Mauris scelerisque, est eget convallis blandit, lorem est scelerisque  dolor, non dapibus orci enim ut risus. Praesent rhoncus ex sit amet nunc luctus, nec eleifend  erat suscipit. In feugiat dui eget gravida dignissim.  Quisque sed dictum felis. Integer viverra iaculis nulla, a euismod est. Nulla nec felis ipsum.  Phasellus sed scelerisque nisl, eu condimentum metus. Aenean convallis risus nec eleifend pharetra. Vivamus rhoncus eleifend mi in imperdiet. Nullam a justo quis dolor viverra elementum.  Nam eleifend leo quis elementum cursus."
      },
      {
        "title": "CSS3",
        "content": "Fusce hendrerit enim et lacus rutrum, fermentum consectetur mauris hendrerit. Mauris scelerisque, est eget convallis blandit, lorem est scelerisque  dolor, non dapibus orci enim ut risus. Praesent rhoncus ex sit amet nunc luctus, nec eleifend  erat suscipit. In feugiat dui eget gravida dignissim.  Quisque sed dictum felis. Integer viverra iaculis nulla, a euismod est. Nulla nec felis ipsum.  Phasellus sed scelerisque nisl, eu condimentum metus. Aenean convallis risus nec eleifend pharetra. Vivamus rhoncus eleifend mi in imperdiet. Nullam a justo quis dolor viverra elementum.  Nam eleifend leo quis elementum cursus."
      },
      {
        "title": "JQuery",
        "content": "Fuscesd hendrerit enim et lacus rutrum, fermentum consectetur mauris hendrerit. Mauris scelerisque, est eget convallis blandit, lorem est scelerisque  dolor, non dapibus orci enim ut risus. Praesent rhoncus ex sit amet nunc luctus, nec eleifend  erat suscipit. In feugiat dui eget gravida dignissim.  Quisque sed dictum felis. Integer viverra iaculis nulla, a euismod est. Nulla nec felis ipsum.  Phasellus sed scelerisque nisl, eu condimentum metus. Aenean convallis risus nec eleifend pharetra. Vivamus rhoncus eleifend mi in imperdiet. Nullam a justo quis dolor viverra elementum.  Nam eleifend leo quis elementum cursus."
      },
      {
        "title": "Wordpress",
        "content": "Fuscedcd hendrerit enim et lacus rutrum, fermentum consectetur mauris hendrerit. Mauris scelerisque, est eget convallis blandit, lorem est scelerisque  dolor, non dapibus orci enim ut risus. Praesent rhoncus ex sit amet nunc luctus, nec eleifend  erat suscipit. In feugiat dui eget gravida dignissim.  Quisque sed dictum felis. Integer viverra iaculis nulla, a euismod est. Nulla nec felis ipsum.  Phasellus sed scelerisque nisl, eu condimentum metus. Aenean convallis risus nec eleifend pharetra. Vivamus rhoncus eleifend mi in imperdiet. Nullam a justo quis dolor viverra elementum.  Nam eleifend leo quis elementum cursus."
      },
      {
        "title": "Photoshop",
        "content": "Fuscecdc hendrerit enim et lacus rutrum, fermentum consectetur mauris hendrerit. Mauris scelerisque, est eget convallis blandit, lorem est scelerisque  dolor, non dapibus orci enim ut risus. Praesent rhoncus ex sit amet nunc luctus, nec eleifend  erat suscipit. In feugiat dui eget gravida dignissim.  Quisque sed dictum felis. Integer viverra iaculis nulla, a euismod est. Nulla nec felis ipsum.  Phasellus sed scelerisque nisl, eu condimentum metus. Aenean convallis risus nec eleifend pharetra. Vivamus rhoncus eleifend mi in imperdiet. Nullam a justo quis dolor viverra elementum.  Nam eleifend leo quis elementum cursus."
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
