import {ParseData} from "../../functions/parse-data";
import {SecondaryMenu} from './secondary-menu';
export class SecondaryMenuList {
  title:string='';
  menu:SecondaryMenu[]=[];
  constructor(data?: any) {
    if (data) {
      ParseData(this, data);
    }
  }
}
