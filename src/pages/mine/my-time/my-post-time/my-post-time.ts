import {Component} from '@angular/core';
import {TimeDetailComponent} from "../../../times-trade/time-detail/time-detail";
import {NavController} from "ionic-angular";
import {PostSecondaryTimeComponent} from "../../../post/post-secondary-time/post-secondary-time";

@Component({
  selector: 'my-post-time',
  templateUrl: 'my-post-time.html'
})
export class MyPostTimeComponent {


  postTimeList = [
    {
      title: '标题文字标题文字标题文字标题文字',
      date: '2018-1-1',
      price: '12元/小时',
      label: '生活',
      isGuoqi: true
    },
    {
      title: '标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字',
      date: '2018-1-1',
      price: '12元/小时',
      label: '工作'
    },
    {
      title: '标题文字标题文字标题文字标题文字',
      date: '2018-1-1',
      price: '12元/小时',
      label: '娱乐'
    },
    {
      title: '标题文字标题文字标题文字标题文字',
      date: '2018-1-1',
      price: '12元/小时',
      label: '优惠'
    }
  ];

  constructor(
    private navCtrl: NavController
  ) {
  }

  toTimesDetailPage(item) {
    if (item.isGuoqi) {
      this.navCtrl.push(PostSecondaryTimeComponent);
    } else {
      this.navCtrl.push(TimeDetailComponent, {detail: item})
    }

  }
}
