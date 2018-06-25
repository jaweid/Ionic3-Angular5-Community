import {Injectable} from "@angular/core";
declare var Wechat: any;
declare let cordova;
@Injectable()
export class ThirdSocialService{
  constructor(){

  }

  isWeChatInstalled():Promise<void>{
    return new Promise((resolve,reject )=> {
      Wechat.isInstalled(()=>{
        resolve()
      },(error)=>{
        reject(error)
      })
    })
  }


  weChatPay(wechatPayObject):Promise<void>{
    return new Promise((resolve,reject)=>{
      Wechat.sendPaymentRequest(wechatPayObject,()=>{
        resolve()
      },(error)=>{
        reject(error);
      })
    })
  }


  unescapeHTML(a):string {
    let aNew = "" + a;
    return aNew.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
  }

  aliPay(aliPayString):Promise<void>{
    return new Promise((resolve, reject) => {
      cordova.plugins.alipay.payment(aliPayString,()=>{
        resolve();
      },(error)=>{
        reject(error);
      })
    })
  }

}
