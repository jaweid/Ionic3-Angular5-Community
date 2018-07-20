import {ParseData} from "../../functions/parse-data";

export class GoodsSearch {
  id: string = '';
  img: string = '';
  name:string='';
  address: string = '';
  price: string = '';
  phone: string = '';
  date: string = '';
  viewNumber: string = '';
  commentsNumber: string = '';

  constructor(data?: any) {
    if (data) {
      ParseData(this, data);
    }
  }
}
