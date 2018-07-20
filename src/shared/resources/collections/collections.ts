import {Time} from "../timeTrade/time";
import {ParseData} from "../../functions/parse-data";

export class Collections {
  date:string='';
  time:Time;
  constructor(data?: any) {
    if (data) {
      ParseData(this, data);
    }
  }
}
