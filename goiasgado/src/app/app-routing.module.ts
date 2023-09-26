import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { FormCompraComponent } from './components/form-compra/form-compra.component';

const routes: Routes = [
 
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buy', component: FormCompraComponent },
  { path: 'register', component: CreateAccountComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
