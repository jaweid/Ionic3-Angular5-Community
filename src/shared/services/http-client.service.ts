import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable, TimeoutError} from "rxjs";
import {Utils} from "./utils.service";
import {GlobalData} from "./global-data.service";
import {NativeService} from "./native.service";
import {environment} from "../consts/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HttpClientService {

  constructor(
              private httpClient: HttpClient,
              private globalData: GlobalData,
              private nativeService: NativeService) {
  }

  postPHP(body) {
    return this.postPHPStart(body)
      .map((item: any) => (item))
  }
  postPHPWithLoading(body){
    return this.postPHPStart(body,true)
      .map((item: any) => (item))
  }

  postPHPStart(data, loading?: boolean): Observable<Response> {
    const url = environment.serverUrl;
    loading?this.nativeService.showLoading():null;
    const fullUrl = Utils.formatUrl(url.startsWith('http') ? url : environment.serverUrl + url);
    return this.httpClient
      .post(fullUrl, HttpClientService.buildURLSearchParams(data).toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .catch(response => this.errorHandler(response))
      .finally(() => {
        loading?this.nativeService.hideLoading():null;
      })
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */

  private errorHandler(response: any): ErrorObservable {
    if (response instanceof HttpErrorResponse) {
      switch (response.status) {
        case 401:
          sessionStorage.clear();
          localStorage.clear();
        case 422:
        case 423:
          return Observable.throw(response);

        default:
          return Observable.throw(response);
      }
    }
    // this.nativeService.alert("请求发生异常");
    return Observable.throw(response);
  }

}
