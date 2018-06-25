import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {SharedModule} from "../../shared/shared.module";
import {ChooseCityComponent} from "./choose-city/choose-city";

@NgModule({
  declarations: [
    HomePage,
    ChooseCityComponent,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule
  ],
  entryComponents:[
    ChooseCityComponent
  ]
})
export class HomePageModule {}
