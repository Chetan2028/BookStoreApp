import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LrheaderComponent } from './components/lrheader/lrheader.component';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component'; 
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { GetbookComponent } from './components/getbook/getbook.component';
import { OrderComponent } from './components/order/order.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    LrheaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    GetbookComponent,
    OrderComponent,
    MyCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,MatToolbarModule,MatCardModule,ReactiveFormsModule,FormsModule,
    MatFormFieldModule,MatInputModule,MatIconModule,MatTooltipModule,MatBadgeModule,MatExpansionModule,
    MatRadioModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
