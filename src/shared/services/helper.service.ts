import {Injectable} from "@angular/core";
declare var Swiper;

@Injectable()
export class HelperService {
  constructor(){

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
}
