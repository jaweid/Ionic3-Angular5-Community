import {ParseData} from "../../functions/parse-data";

export class FirstMenu {
  id:string='';
  name:string='';
  constructor(data?:any){
    if(data){
      ParseData(this, data);
    }
  }
}
