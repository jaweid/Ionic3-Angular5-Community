import {ParseData} from "../../functions/parse-data";

export class Time {
  id='';
  header='';
  name='';
  price='';
  viewNumber='';
  lover='';
  phone='';
  imgList=[];
  address?:string='';



  constructor(data?:any){
    if(data){
      ParseData(this, data);

    }
  }
}