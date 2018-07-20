import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MinePage} from './mine';
import {MineInfoAliasPage} from "./mine-info-alias/mine-info-alias";
import {RealNameCertifyComponent} from "./real-name-certify/real-name-certify";
import {MyCollectionComponent} from "./my-collection/my-collection";
import {MySettingComponent} from "./my-setting/my-setting";
import {MyPostComponent} from "./my-post/my-post";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    MinePage,
    MineInfoAliasPage,
    RealNameCertifyComponent,
    MyCollectionComponent,
    MySettingComponent,
    MyPostComponent
  ],
  entryComponents: [
    MineInfoAliasPage,
    RealNameCertifyComponent,
    MyCollectionComponent,
    MySettingComponent,
    MyPostComponent
  ],
  imports: [
    IonicPageModule.forChild(MinePage),
    SharedModule
  ],
})
export class MinePageModule {
}
