import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartBehav = new BehaviorSubject(0);
  currValue = this.cartBehav.asObservable();
  public cartItems = [];
  prodList = new BehaviorSubject([]);
  private total = new BehaviorSubject(0);
  public curTotal = this.total.asObservable();
  constructor() { }
  updateCart(newVal:any) {
    this.cartBehav.next(newVal);
  }
  getProduct() {
    return this.prodList.asObservable()
  }
  setProduct(product:any){
    this.cartItems.push(...product)
    this.prodList.next(product)
  }
  addToCart(product:any) {
    this.cartItems.push(product);
    this.prodList.next(this.cartItems);
    this.getTotalPrice();
  }
  updateTotal(newVal: any) {
    this.total.next(newVal.toFixed(3));
  }
  getTotalPrice() {
    let total = 0;
    this.cartItems.map((a: any) => total += a.price)
    this.updateTotal(total);
  }
  removeCartItem(product:any) {
    this.cartItems.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1)
      }
    })
  }
  removeAllCart() {
    this.cartItems.length = 0;
    this.prodList.next(this.cartItems);
    this.total.next(0);
    this.cartBehav.next(0);
  }
}
