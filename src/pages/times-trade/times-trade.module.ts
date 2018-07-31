import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TimesTradePage} from './times-trade';
import {SharedModule} from "../../shared/shared.module";
import {TimeDetailAmountModalComponent} from "./time-detail/time-detail-amount-modal/time-detail-amount-modal";
import {TimeDetailComponent} from "./time-detail/time-detail";
import {TimePayComponent} from "./time-detail/time-pay/time-pay";

@NgModule({
  declarations: [
    TimesTradePage,
    TimeDetailAmountModalComponent,
    TimeDetailComponent,
    TimePayComponent
  ],
  imports: [
    IonicPageModule.forChild(TimesTradePage),
    SharedModule
  ],
  entryComponents: [TimeDetailAmountModalComponent, TimeDetailComponent, TimePayComponent]
})
export class TimesTradePageModule {
}
