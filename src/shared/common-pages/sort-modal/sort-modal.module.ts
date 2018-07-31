import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortModalPage } from './sort-modal';

@NgModule({
  declarations: [
    SortModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SortModalPage),
  ],
})
export class SortModalPageModule {}
