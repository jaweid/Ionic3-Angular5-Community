import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimesTradePage } from './times-trade';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    TimesTradePage,
  ],
  imports: [
    IonicPageModule.forChild(TimesTradePage),
    SharedModule
  ],
})
export class TimesTradePageModule {}
