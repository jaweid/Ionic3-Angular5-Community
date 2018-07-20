import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
declare var Swiper;


@Injectable()
export class HelperService {
  constructor(
    public http: HttpClient
  ){

  }


  initSwiper() {
    let swiper = new Swiper('.swiper-container', {
      autoplay: 1000,
      loop: true,
      observer: true,
      observeParents: true,
      pagination: '.swiper-pagination',//分页器
      paginationType: 'bullets',//分页器类型,
      paginationClickable: true
    })
  }


  getCitiesData(){
    return this.http.get('./assets/data/city-data.json')
      .map((item: any) => (item))

  }
}
