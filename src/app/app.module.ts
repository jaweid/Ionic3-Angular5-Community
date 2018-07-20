import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";
import {Toast} from "@ionic-native/toast";
import {File} from "@ionic-native/file";
import {ImagePicker} from "@ionic-native/image-picker";
import {Network} from "@ionic-native/network";
import {AppMinimize} from "@ionic-native/app-minimize";



import {IonicStorageModule} from "@ionic/storage";
import {SharedModule} from "../shared/shared.module";

//for need entryComponents module
import {HomePageModule} from "../pages/home/home.module";
import {PostPageModule} from "../pages/post/post.module";
import {MinePageModule} from "../pages/mine/mine.module";
import {MineAccountPageModule} from '../pages/mine/mine-account/mine-account.module';
import {MineAddressPageModule} from "../pages/mine/mine-address/mine-address.module";

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      mode: 'ios',//android是'md'
    }),
    IonicStorageModule.forRoot(),
    SharedModule.forRoot(),
    HomePageModule,
    PostPageModule,
    MinePageModule,
    MineAccountPageModule,
    MineAddressPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Camera,
    Toast,
    File,
    ImagePicker,
    Network,
    AppMinimize,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
