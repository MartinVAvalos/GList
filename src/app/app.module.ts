import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from '@angular/forms'
import {environment} from '../environments/environment';
import {FireserveService} from './services/fireserve.service';
import { UserService } from './services/user.service';
import{HttpModule} from '@angular/http';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './components/auth/auth.service';
import { BlankComponent } from './components/blank/blank.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FireserveService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
