import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import {BlankComponent} from './components/blank/blank.component';

const routes: Routes = [
  {path: '', component: SigninComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'user', component: UserComponent }

  
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
