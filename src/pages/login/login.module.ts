import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {ForgetPasswordPage} from './forget-password/forget-password';
import {ForgetPasswordNextPage} from './forget-password-next/forget-password-next';
import {ResetPasswordDonePage} from './reset-password-done/reset-password-done';
import {RegisterPage} from './register/register';

@NgModule({
  declarations: [
    LoginPage,ForgetPasswordPage,ForgetPasswordNextPage,ResetPasswordDonePage,RegisterPage
  ],
  entryComponents:[
    LoginPage,ForgetPasswordPage,ForgetPasswordNextPage ,ResetPasswordDonePage,RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
