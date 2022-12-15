import { NgModule } from '@angular/core';
// podrska za sve browsere : 
import { BrowserModule } from '@angular/platform-browser';
// modul za animacije : 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// modul za rutiranje : 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// biblioteka funkcionalnosti flex-layout - kontrola rasporeda (po uzoru na flexbox-u CSSa) : 
import { FlexLayoutModule } from '@angular/flex-layout';
// modul u kome definisemo sve material module koje koristimo koji su onda dostupni celoj aplikaciji : 
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

// custom komponente : 
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FinishedOrdersComponent } from './cart/finished-orders/finished-orders.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';
import { ProductService } from './products.service';
import { FinishedOrdersService } from './cart/finished-orders/finished-orders.service';
import { VoteComponent } from './cart/finished-orders/vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    FinishedOrdersComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProfileComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService, ProductService, FinishedOrdersService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent , VoteComponent]
})
export class AppModule { }
