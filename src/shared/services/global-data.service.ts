import {Injectable} from '@angular/core';

@Injectable()
export class GlobalData {

  private _userData: any;//用户登录信息

  private _userCity:any; //用户当前城市信息

  //设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
  private _showLoading: boolean = true;

  //app更新进度.默认为0,在app升级过程中会改变
  private _updateProgress: number = -1;

  private _userMoney:any //账户余额

 get userMoney(){
    return this._userMoney;
 }

 set userMoney(value){
   this._userMoney = value;
 }

  get userData() {
    return this._userData;
  }

  set userData(value) {
    this._userData = value;
  }

  get userCity(){
    return this._userCity;
  }

  set userCity(value){
    this._userCity=value;
  }

  get showLoading(): boolean {
    return this._showLoading;
  }

  set showLoading(value: boolean) {
    this._showLoading = value;
  }

  get updateProgress(): number {
    return this._updateProgress;
  }

  set updateProgress(value: number) {
    this._updateProgress = value;
  }

}
