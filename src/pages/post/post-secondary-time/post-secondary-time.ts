import {Component} from '@angular/core';
import {HelperService} from "../../../shared/services/helper.service";

import {PostTimeColumn, PostTimeUnit} from "../../../shared/consts/const";
import {CalendarModal, CalendarModalOptions, CalendarResult} from "ion2-calendar";
import {ModalController} from "ionic-angular";

import * as moment from 'moment';

@Component({
  selector: 'post-secondary-time',
  templateUrl: 'post-secondary-time.html'
})
export class PostSecondaryTimeComponent {
  fileObjList: string[] = [];
  postTimeUnit: any[] = [];
  postTimeColumn: any[] = [];

  //choose city
  cityData: any[];

  //choose date range
  dateRange: { from: CalendarResult; to: CalendarResult };

  timeRange = {
    start: moment().format('HH:mm'),
    end: moment().format('HH:mm')
  };

  constructor(
    private help: HelperService,
    private modalCtrl: ModalController
  ) {
    this.help.getCitiesData()
      .subscribe(data => {
        this.cityData = data;
      });

    this.postTimeUnit[0] = PostTimeUnit;
    this.postTimeColumn[0] = PostTimeColumn;
  }

  cityChange(event) {
    // this.addressModel.province=event.province.text;
    // this.addressModel.city=event.city.text;
    // this.addressModel.district=event.region.text;
    // this.code = event['region'].value
  }


  openCalendar() {
    const options: CalendarModalOptions = {
      monthFormat: 'YYYY 年 MM 月 ',
      weekdays: ['天', '一', '二', '三', '四', '五', '六'],
      weekStart: 1,
      closeLabel: '取消',
      doneLabel: '确认',
      defaultDate: new Date(),
      pickMode: 'range',
      title: '日期段'
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
      console.log(date);
      this.dateRange = date;
    });
  }

}
