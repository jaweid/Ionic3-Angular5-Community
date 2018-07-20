import {ParseData} from "../../functions/parse-data";

export class Notifications {
  title:string='';
  id:string='';
  date:string='';
  constructor(data?:any){
    if (data) {
      ParseData(this, data);
    }
  }
}
