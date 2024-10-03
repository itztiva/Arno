import { IValidator } from "../../interfaces";
import { Base } from "../../classes";

export class ArrayV extends Base {
  private itemValidator: IValidator;

  constructor(itemValidator: IValidator) {
    super();
    this.itemValidator = itemValidator;
  }

  validate(value: any, fieldName: string): boolean {
    if (!Array.isArray(value)) {
      this.message = `${fieldName} must be an array`;
      return false;
    }

    for (const item of value) {
      if (!this.itemValidator.validate(item, fieldName)) {
        this.message = `${fieldName} has an invalid item: ${this.itemValidator.message}`;
        return false;
      }
    }
    return true;
  }
}
