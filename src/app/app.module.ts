import {NgModule, ErrorHandler,LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
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
import {MySettingsPageModule} from "../pages/mine/my-settings/my-settings.module";
import {LoginPageModule} from "../pages/login/login.module";
import {GoodsSearchPageModule} from "../pages/goods-search/goods-search.module";
import {ThingSearchPageModule} from "../pages/thing-search/thing-search.module";
import {TimesTradePageModule} from "../pages/times-trade/times-trade.module";
import {PeopleSearchPageModule} from "../pages/people-search/people-search.module";

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      mode: 'ios',//android是'md'
    }),
    IonicStorageModule.forRoot(),
    SharedModule.forRoot(),
    HomePageModule,
    PostPageModule,
    MinePageModule,
    MineAccountPageModule,
    MineAddressPageModule,
    MySettingsPageModule,
    LoginPageModule,
    GoodsSearchPageModule,
    ThingSearchPageModule,
    TimesTradePageModule,
    PeopleSearchPageModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: "zh-CN" }
  ]
})
export class AppModule {
}
