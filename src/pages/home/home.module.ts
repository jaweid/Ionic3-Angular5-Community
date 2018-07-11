import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {SharedModule} from "../../shared/shared.module";
import {ChooseCityComponent} from "./choose-city/choose-city";
import {NotificationsPage} from "./notifications/notifications";

@NgModule({
  declarations: [
    HomePage,
    ChooseCityComponent,
    NotificationsPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule
  ],
  entryComponents:[
    ChooseCityComponent,
    NotificationsPage
  ]
})
export class HomePageModule {}
