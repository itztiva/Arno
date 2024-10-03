import { Base } from "../../classes";

export class Any extends Base {
  validate(_value: any, _fieldName: string): any {
    return true;
  }
}
