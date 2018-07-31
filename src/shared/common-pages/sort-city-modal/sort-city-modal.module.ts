import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortCityModalPage } from './sort-city-modal';

@NgModule({
  declarations: [
    SortCityModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SortCityModalPage),
  ],
})
export class SortCityModalPageModule {}
