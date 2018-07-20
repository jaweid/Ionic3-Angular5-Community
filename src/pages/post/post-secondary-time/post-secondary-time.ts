import {Component} from '@angular/core';
import {HelperService} from "../../../shared/services/helper.service";

import {convertEnumToColumn} from 'ion-multi-picker';
import {PostTimeColumn, PostTimeUnit} from "../../../shared/consts/const";

@Component({
  selector: 'post-secondary-time',
  templateUrl: 'post-secondary-time.html'
})
export class PostSecondaryTimeComponent {
  fileObjList: string[] = [];
  postTimeUnit: any[] = [];
  postTimeColumn: any[] = [];

  cityData: any[];

  constructor(
    private help: HelperService
  ) {
    this.help.getCitiesData()
      .subscribe(data => {
        this.cityData = data;
      });

    this.postTimeUnit[0] =PostTimeUnit;
    this.postTimeColumn[0] = PostTimeColumn;
  }

  cityChange(event) {
    // this.addressModel.province=event.province.text;
    // this.addressModel.city=event.city.text;
    // this.addressModel.district=event.region.text;
    // this.code = event['region'].value
  }
}
