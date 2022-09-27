import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/products-service.service';
import { CartServiceService } from 'src/app/cart-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productsList: any;
  actRout: any;
  fiterProduct: any;
  curValue: any;
  spinner: any;
  constructor(private activeRout: ActivatedRoute, private prodServ: ProductsServiceService,private cartServ:CartServiceService,public loading:NgxSpinnerService) {
  }
  ngOnInit(): void {
    this.loading.show();
    this.activeRout.params.subscribe(param => this.actRout = param);
    this.prodServ.getProdList().subscribe({
      next: data => {
        this.productsList = data
        this.fiterProduct = Array.from(this.productsList.products.filter((prod: any) => prod.id === Number(this.actRout.id)));
        this.loading.hide()
      },
      error:error => {
      console.log('error: ', error); },
      complete:() => {
      console.log('complete ', "compelete"); }
    }
    )
    this.cartServ.currValue.subscribe((val) => this.curValue = val)
  }
  ngAfterViewInit(): void {
  }
  addToCart(prod:any) {
    this.cartServ.addToCart(prod);
    this.cartServ.updateCart(this.curValue + 1);
  }


}
