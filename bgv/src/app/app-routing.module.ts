import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './dashboard/admin/admin.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { LoginPageComponent } from './dashboard/login-page/login-page.component';
import { SideMenuComponent } from './dashboard/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'search', component: SearchEmployeeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidemenu', component: SideMenuComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
