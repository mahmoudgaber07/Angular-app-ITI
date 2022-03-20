import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/cart-service.service';
import {ProductsServiceService}from 'src/app/products-service.service'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() proList:any;
  constructor(private route: Router, private cartServ:CartServiceService,private api:ProductsServiceService) { }
  receiveProduct(proList: any): void{
    this.route.navigate([`product/${proList.id}`]);
    console.log(proList);
  }

  count: any;
  ngOnInit(): void {
    this.cartServ.currValue.subscribe((val) => this.count = val)
  }
  addToCart(item:any) {
    this.cartServ.updateCart(this.count + 1);
    this.cartServ.addToCart(item)
  }
}
