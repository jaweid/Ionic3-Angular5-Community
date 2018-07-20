import {ParseData} from "../../functions/parse-data";

export class Class {
  email='';
  phoneNumber='';
  name='';
  avatar='';
  sex='';



  constructor(data?:any){
    if(data){
      ParseData(this, data);

    }
  }
}
