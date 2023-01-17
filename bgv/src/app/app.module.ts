import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';
import { SearchEmployeeDetailsComponent } from './pages/search-employee-details/search-employee-details.component';
import { LoginPageComponent } from './dashboard/login-page/login-page.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SideMenuComponent } from './dashboard/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    SearchEmployeeComponent,
    SearchEmployeeDetailsComponent,
    LoginPageComponent,
    AdminComponent,
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
