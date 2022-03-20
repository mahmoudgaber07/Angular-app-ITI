import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartLis: any;
  curValue: any;
  curTotal: any;
  constructor( private cartServ: CartServiceService) { }
  ngOnInit(): void {
    this.cartLis = this.cartServ.cartItems;
    this.cartServ.currValue.subscribe((val) => this.curValue = val)
    this.cartServ.curTotal.subscribe((val) => this.curTotal = val)
  }
  removeItem(item:any) {
    this.cartServ.removeCartItem(item)
    this.cartServ.updateCart(this.curValue - 1);
    this.cartServ.updateTotal(this.curTotal-item.price)
  }
  removeAllItems() {
    this.cartServ.removeAllCart()
  }

}
