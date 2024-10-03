import { Base } from "../../classes";

export class NumberV extends Base {
  validate(value: any, fieldName: string): boolean {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      this.message = `${fieldName} must be a valid number`;
      return false;
    }
    return true;
  }
}
