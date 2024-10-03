import { Base } from "../../classes";

export class Enum<T> extends Base {
  private validValues: T[];

  constructor(validValues: T[]) {
    super();
    this.validValues = validValues;
  }

  validate(value: any, fieldName: string): boolean {
    if (!this.validValues.includes(value)) {
      this.message = `${fieldName} must be one of: ${this.validValues.join(
        ", "
      )}`;
      return false;
    }
    return true;
  }
}
