import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroImg: string = "../../assets/img/MahmoudGaber _ LinkedIn.png";
  name: string = "Mahmoud Gaber";
  job: string = "Front-End Developer";
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
}
