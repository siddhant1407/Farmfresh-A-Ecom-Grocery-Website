import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProddetailComponent } from './proddetail/proddetail.component';
import { MycartComponent } from './mycart/mycart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';
import { ProductServices } from './product.service';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProddetailComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [ProductServices,CartServices,NewOrderServices],  
  bootstrap: [AppComponent]
})
export class AppModule { }
