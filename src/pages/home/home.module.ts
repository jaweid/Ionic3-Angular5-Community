import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {SharedModule} from "../../shared/shared.module";
import {ChooseCityComponent} from "./choose-city/choose-city";
import {NotificationsPage} from "./notifications/notifications";
import {NotificationDetailComponent} from "./notifications/notification-detail/notification-detail";

@NgModule({
  declarations: [
    HomePage,
    ChooseCityComponent,
    NotificationsPage,
    NotificationDetailComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule
  ],
  entryComponents:[
    ChooseCityComponent,
    NotificationsPage,
    NotificationDetailComponent
  ]
})
export class HomePageModule {}
