import {ParseData} from "../../functions/parse-data";

export class PeopleSearch {
  id='';
  avatar='';
  title='';
  subTitle='';
  date='';
  viewNumber='';
  commentsNumber='';



  constructor(data?:any){
    if(data){
      ParseData(this, data);

    }
  }
}
