import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimesTradePage } from './times-trade';

@NgModule({
  declarations: [
    TimesTradePage,
  ],
  imports: [
    IonicPageModule.forChild(TimesTradePage),
  ],
})
export class TimesTradePageModule {}
