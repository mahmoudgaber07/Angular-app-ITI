import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './portfolio/about/about.component';
import { PortfoliosComponent } from './portfolio/portfolios/portfolios.component';
import { HeroComponent } from './portfolio/hero/hero.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductListComponent } from './e-commerce/product-list/product-list.component';
import { ProductCardComponent } from './e-commerce/product-card/product-card.component';
import { ProductDetailsComponent } from './e-commerce/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    PortfoliosComponent,
    HeroComponent,
    SkillsComponent,
    PortfolioComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundPageComponent,
    CustomPipePipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
