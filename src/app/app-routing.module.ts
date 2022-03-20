import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './e-commerce/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductListComponent } from './e-commerce/product-list/product-list.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {CartComponent} from './cart/cart.component'
const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
