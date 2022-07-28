import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientSginupComponent } from './signup/client-sginup/client-sginup.component';
import { RequestComponent } from './request/request.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ClientSginupComponent, RequestComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
