import {Injectable} from '@angular/core';
import {ToastController, LoadingController, Platform,Loading,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {AppMinimize} from "@ionic-native/app-minimize";
import {Toast} from '@ionic-native/toast';
import {File} from '@ionic-native/file';


import {ImagePicker} from '@ionic-native/image-picker';
import {Network} from '@ionic-native/network';


@Injectable()
export class NativeService {
  private loading: Loading;
  private loadingIsOpen: boolean = false;
  constructor(private platform: Platform,
              private alertCtrl:AlertController,
              private toastCtrl: ToastController,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private camera: Camera,
              private toast: Toast,
              private file: File,
              private imagePicker: ImagePicker,
              private network: Network,
              private appMinimize: AppMinimize,
              private loadingCtrl: LoadingController,

  ){

  }

  warn(info): void {
    console.log('%cNativeService/' + info, 'color:#e8c406');
  }


  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   * @return {boolean}
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   * @return {boolean}
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  alert(title: string, message: string = "",ifShowCancelButton?:boolean,okEvent?:Function,failEvent?:Function): void {
    let buttons=[];
    if(ifShowCancelButton) {
      buttons = [
        {
          text: '取消',
          handler: data => {
            failEvent();
          }
        },
        {
          text: '确认',
          handler: data => {
            okEvent();
          }
        }
      ];
    }

    this.alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons
    }).present();
  }

  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  showToast(message: string = '', duration: number = 2000): void {
    if (this.isMobile()) {
      this.toast.show(message, String(duration), 'center').subscribe();
    } else {
      this.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'top',
        showCloseButton: false
      }).present();
    }
  };

  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
    if (!this.loadingIsOpen) {
      this.loadingIsOpen = true;
      this.loading = this.loadingCtrl.create({
        content: content,
        // showBackdrop:false,
        enableBackdropDismiss:true,
        dismissOnPageChange:true
      });
      this.loading.present();
    }
  };

  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loadingIsOpen && this.loading.dismiss();
    this.loadingIsOpen = false;
  };


  /**
   * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   */
  getNetworkType(): string {
    if (!this.isMobile()) {
      return 'wifi';
    }
    return this.network.type;
  }
  /**
   * 判断是否有网络
   * @returns {boolean}
   */
  isConnecting(): boolean {
    return this.getNetworkType() != 'none';
  }

  /**
   * 获得app版本号,如0.01
   * @description  对应/config.xml中version的值
   * @returns {Promise<string>}
   */
  // getVersionNumber(): Observable<string> {
  //   return Observable.create(observer=>{
  //     this.appVersion.getVersionNumber().then((value:string)=>{
  //       observer.next(value);
  //     }).catch(err=>{
  //       console.log("获得app版本号失败");
  //     })
  //   })
  // }

  /**
   * 使用默认状态栏
   */
  statusBarStyleDefault() {
    this.statusBar.styleDefault();
  }

  /**
   * 隐藏启动页面
   */
  splashScreenHide() {
    this.splashScreen.hide();
  }

  /**
   * 调用最小化app插件
   */
  minimize() {
    this.appMinimize.minimize()
  }

  /**
   * 使用cordova-plugin-camera获取照片
   * @param options
   * @returns {Promise<string>}
   */
  getPicture(options: CameraOptions = {}): Promise<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.CAMERA,//图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
      destinationType: this.camera.DestinationType.DATA_URL,//默认返回base64字符串,DATA_URL:base64   FILE_URI:图片路径
      quality: 70,//图像质量，范围为0 - 100
      allowEdit: true,//选择图片前是否允许编辑
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 300,//缩放图像的宽度（像素）
      targetHeight: 300,//缩放图像的高度（像素）
      saveToPhotoAlbum: true,//是否保存到相册
      correctOrientation: true//设置摄像机拍摄的图像是否为正确的方向
    }, options);
    return new Promise((resolve) => {
      this.camera.getPicture(ops).then((imgData: string) => {
        resolve(imgData);
      }, (err) => {
        err == 20 && this.showToast('没有权限,请在设置中开启权限');
        this.warn('getPicture:' + err)
      });
    });
  };

  /**
   * 通过拍照获取照片
   * @param options
   * @return {Promise<string>}
   */
  getPictureByCamera(options: CameraOptions = {}): Promise<string> {
    return new Promise((resolve) => {
      this.getPicture(Object.assign({
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
      }, options)).then((imgData: string) => {
        resolve(imgData);
      }).catch(err => {
        String(err).indexOf('cancel') != -1 ? this.showToast('取消拍照', 1500) : this.showToast('获取照片失败');
      });
    });
  };


  /**
   * 通过图库获取照片
   * @param options
   * @return {Promise<string>}
   */
  getPictureByPhotoLibrary(options: CameraOptions = {}): Promise<string> {
    return new Promise((resolve) => {
      this.getPicture(Object.assign({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
      }, options)).then((imgData: string) => {
        resolve(imgData);
      }).catch(err => {
        String(err).indexOf('cancel') != -1 ? this.showToast('取消选择图片', 1500) : this.showToast('获取照片失败');
      });
    });
  };


  /**
   * 通过图库选择多图
   * @param options
   * @return {Promise<T>}
   */
  getMultiplePicture(options = {}): Promise<any> {
    let that = this;
    let destinationType = options['destinationType'] || 0;//0:base64字符串,1:图片url
    return new Promise((resolve) => {
      this.imagePicker.getPictures(Object.assign({
        maximumImagesCount: 6,
        width: 300,//缩放图像的宽度（像素）
        height: 300,//缩放图像的高度（像素）
        quality: 70//图像质量，范围为0 - 100
      }, options)).then(files => {
        if (destinationType === 1) {
          resolve(files);
        } else {
          let imgBase64s = [];//base64字符串数组
          for (let fileUrl of files) {
            that.convertImgToBase64(fileUrl, base64 => {
              imgBase64s.push(base64);
              if (imgBase64s.length === files.length) {
                resolve(imgBase64s);
              }
            });
          }

        }
      }).catch(err => {
        this.warn('getMultiplePicture:' + err);
        this.showToast('获取照片失败');
      });
    });
  };
  /**
   * 根据图片绝对路径转化为base64字符串
   * @param url 绝对路径
   * @param callback 回调函数
   */
  /*function (base64Image) {

   callback.call(this, base64Image.substring(base64Image.indexOf(';base64,') + 8));
   }
   */
  convertImgToBase64(url: string, callback) {
    this.getFileContentAsBase64(url,(base64Image)=>{
      callback.call(this, base64Image.substring(base64Image.indexOf(';base64,') + 8));
    } )
  }

  private getFileContentAsBase64(path: string, callback) {
    function fail(err) {
      console.log('Cannot found requested file' + err);
    }
    function gotFile(fileEntry) {
      fileEntry.file(function (file) {
        let reader = new FileReader();
        reader.onloadend = function (e) {
          let content = this.result;
          callback(content);
        };
        reader.readAsDataURL(file);
      });
    }

    this.file.resolveLocalFilesystemUrl(path).then(
      fileEnter =>{
        gotFile(fileEnter);
      }
    ).catch(err =>
      this.showToast(err)
    );
    // window['resolveLocalFileSystemURL'](path, gotFile, fail);
  }




}
