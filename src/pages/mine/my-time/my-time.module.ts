import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MyTimePage} from './my-time';
import {MyPostTimeOrderComponent} from "./my-post-time-order/my-post-time-order";
import {MyPostTimeComponent} from "./my-post-time/my-post-time";
import {MyPostTimeOrderDetailComponent} from "./my-post-time-order/my-post-time-order-detail/my-post-time-order-detail";

@NgModule({
  declarations: [
    MyTimePage,
    MyPostTimeComponent,
    MyPostTimeOrderComponent,
    MyPostTimeOrderDetailComponent
  ],
  imports: [
    IonicPageModule.forChild(MyTimePage),
  ],
  entryComponents: [
    MyPostTimeComponent,
    MyPostTimeOrderComponent,
    MyPostTimeOrderDetailComponent
  ]
})
export class MyTimePageModule {
}
