
export function GetFromData<T>(data: Object, key: string): T {

  if (data[key]) {
    return data[key];
  }


  return undefined;

}
