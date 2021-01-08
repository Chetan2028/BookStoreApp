import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetbookComponent } from './components/getbook/getbook.component';
import { LoginComponent } from './components/login/login.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'',component:GetbookComponent}
  ]
  },
  {path:'order',component:OrderComponent},
  {path:'cart',component:MyCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
