import {ParseData} from "../../functions/parse-data";

export class SecondaryMenu {
  id: string = '';
  img: string = '';
  text: string = '';
  type?: string = '';

  constructor(data?: any) {
    if (data) {
      ParseData(this, data);
    }
  }
}
