import { GetFromData } from './get-from-data';

export function ParseData(object: Object, data: Object): void {

  Object.keys(object).forEach(key => {
    const value = GetFromData(data, key);

    object[key] = typeof object[key] === 'number' ? +value : value;
  });

}
