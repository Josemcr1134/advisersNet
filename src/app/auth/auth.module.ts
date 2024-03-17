import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routes';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetComponent } from './reset/reset.component'


@NgModule({
  declarations: [
    LoginComponent,
    RecoverPasswordComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
