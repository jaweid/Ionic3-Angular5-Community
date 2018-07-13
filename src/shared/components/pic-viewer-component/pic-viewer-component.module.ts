/**
 * Created by JLiu on 2017/7/17.
 */
import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {SelectPic} from "./select-pic";
import {ViewerPicModule} from "./viewer-pic.module";

@NgModule({
  imports: [IonicModule, ViewerPicModule],
  declarations: [ SelectPic],
  exports: [SelectPic],
  providers: []
})
export class PicViewerComponentModule {
}
