import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySettingsPage } from './my-settings';
import {PhoneCertificateComponent} from "./phone-certificate/phone-certificate";
import {SettingPasswordComponent} from "./setting-password/setting-password";

@NgModule({
  declarations: [
    MySettingsPage,
    PhoneCertificateComponent,
    SettingPasswordComponent
  ],
  imports: [
    IonicPageModule.forChild(MySettingsPage),
  ],
  entryComponents:[
    PhoneCertificateComponent,
    SettingPasswordComponent
  ]
})
export class MySettingsPageModule {}
