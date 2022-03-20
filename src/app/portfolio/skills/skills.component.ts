import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  focus: string[] = ["UI/UX Design","Responsive Design","Web Design","Mobile App Design"];
  skills: string[] = ["HTML", "CSS", "SCSS", "Javascript","Typescript", "React", "Angular"];
  constructor() { }

  ngOnInit(): void {
  }

}
