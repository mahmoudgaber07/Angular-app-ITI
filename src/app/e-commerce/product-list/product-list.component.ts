import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/products-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList: any;
  constructor(private productsServ: ProductsServiceService, private spinner: NgxSpinnerService) {
    this.spinner.show();
  }
  ngOnInit(): void {
    this.productsServ.getProdList().subscribe(
      {
        next: data => {
          this.productsList = data
          this.spinner.hide();
      },
        error:error => {
          console.log('error: ', error);
        },
        complete:() =>{
          console.log('complete ', "complete");
        }
      }
    )
  }
}
