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




@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [FireserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
