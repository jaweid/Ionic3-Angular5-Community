import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NetworkNonePage } from './network-none';

@NgModule({
  declarations: [
    NetworkNonePage,
  ],
  imports: [
    IonicPageModule.forChild(NetworkNonePage),
  ],
})
export class NetworkNonePageModule {}
