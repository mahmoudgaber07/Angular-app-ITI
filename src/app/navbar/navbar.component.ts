import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count: any;
  constructor(private cartServ:CartServiceService) { }
  ngOnInit(): void {
    this.cartServ.currValue.subscribe((val)=> this.count = val)
  }


}
