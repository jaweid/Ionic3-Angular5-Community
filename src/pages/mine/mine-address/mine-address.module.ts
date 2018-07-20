import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MineAddressPage } from './mine-address';
import{AddShippingAddressPage} from './add-shipping-address/add-shipping-address';

import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    MineAddressPage,AddShippingAddressPage
  ],
  entryComponents:[
    MineAddressPage,AddShippingAddressPage
  ],
  imports: [
    IonicPageModule.forChild(MineAddressPage),
    SharedModule
  ],
})
export class MineAddressPageModule {}
