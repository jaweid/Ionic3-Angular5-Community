import {ParseData} from "../../functions/parse-data";

export class Order {
  id: string = '';
  orderSN: string = '';
  status: string = '';
  statusCode: string = '';
  img: string = '';
  title: string = '';
  price: string = '';
  volume: string = '';
  sumPrice: string = '';
  unit:string='';
  constructor(data?: any) {
    if (data) {
      ParseData(this, data);

    }
  }
}
