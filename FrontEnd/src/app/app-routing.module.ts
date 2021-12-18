import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProddetailComponent } from './proddetail/proddetail.component';
import { RegisterComponent } from './register/register.component';
import { MycartComponent } from './mycart/mycart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';

const appRoutes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:HomepageComponent},
    {path:'product-detail/:id',component:ProddetailComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'mycart',component:MycartComponent},
    {path:'aboutus',component:AboutusComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
