import {Component, ViewChild} from '@angular/core';
import {IonicApp, Keyboard, Nav, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NativeService} from "../shared/services/native.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'TabsPage';
  backButtonPressed: boolean = false;
  @ViewChild('myNav') nav: Nav;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private ionicApp: IonicApp,
              public keyboard: Keyboard,
              private toastCtrl: ToastController,
              private nativeService: NativeService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.registerBackButtonAction();
      this.assertNetwork();//检测网络
    });
  }


  registerBackButtonAction() {
    if (!this.nativeService.isAndroid()) {
      return;
    }
    this.platform.registerBackButtonAction(() => {
      if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
        this.keyboard.close();
        return;
      }
      let activePortal = this.ionicApp._modalPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._toastPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      ;
      if (activePortal) {
        activePortal.dismiss();
        return;
      }

      let tabs = this.nav.getActiveChildNav();//获取tabs导航,this.nav是总导航,tabs是子导航
      let tab = tabs.getSelected();//获取选中的tab
      let activeVC = tab.getActive();//通过当前选中的tab获取ViewController
      let activeNav = activeVC.getNav();//通过当前视图的ViewController获取的NavController
      return activeNav.canGoBack() ? activeNav.pop() : this.showExit();//this.showExit()

    }, 1);
  }

  //双击退出提示框
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.nativeService.showToast('再按一次退出应用');
      this.backButtonPressed = true;
      setTimeout(() => { //2秒内没有再次点击返回则将触发标志标记为false
        this.backButtonPressed = false;
      }, 2000)
    }
  }

  assertNetwork() {
    if (!this.nativeService.isConnecting()) {
      this.toastCtrl.create({
        message: '未检测到网络,请连接网络',
        showCloseButton: true,
        closeButtonText: '确定'
      }).present();
    }
  }
}
