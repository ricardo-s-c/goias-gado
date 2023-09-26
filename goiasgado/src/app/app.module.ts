import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToggleService } from './components/services/toggle.service';
import { FormCompraComponent } from './components/form-compra/form-compra.component';
import { FormCompraModule } from './components/form-compra/form.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardMainComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    FormCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
