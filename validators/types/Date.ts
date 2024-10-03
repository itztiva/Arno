import { Base } from "../../classes";

export class DateV extends Base {
  validate(value: any, fieldName: string): boolean {
    const dateValue = new Date(value);
    if (isNaN(dateValue.getTime())) {
      this.message = `${fieldName} must be a valid date`;
      return false;
    }
    return true;
  }
}
