import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  title: string = "Portfolio";
  Portfolios:string[] =["WEB DESIGN","MOBILE DESIGN","UI/UX DESIGN","LOGO DESIGN","WEB APPLICATION DEVELOPMENT","MOBILE APPLICATION DEVELOPMENT"]
  constructor() { }

  ngOnInit(): void {
  }

}
