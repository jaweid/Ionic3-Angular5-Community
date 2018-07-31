import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MinePage} from './mine';
import {MineInfoAliasPage} from "./mine-info-alias/mine-info-alias";
import {RealNameCertifyComponent} from "./real-name-certify/real-name-certify";
import {MyCollectionComponent} from "./my-collection/my-collection";
import {MyPostComponent} from "./my-post/my-post";
import {SharedModule} from "../../shared/shared.module";
import {SignInRecordsComponent} from "./sign-in-records/sign-in-records";

@NgModule({
  declarations: [
    MinePage,
    MineInfoAliasPage,
    RealNameCertifyComponent,
    MyCollectionComponent,
    MyPostComponent,
    SignInRecordsComponent
  ],
  entryComponents: [
    MineInfoAliasPage,
    RealNameCertifyComponent,
    MyCollectionComponent,
    MyPostComponent,
    SignInRecordsComponent
  ],
  imports: [
    IonicPageModule.forChild(MinePage),
    SharedModule
  ],
})
export class MinePageModule {
}
