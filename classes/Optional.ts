import { Base } from "./Base";
import { IValidator } from "../interfaces/index";

export class Optional extends Base {
  private validator: IValidator;

  constructor(validator: IValidator) {
    super();
    this.validator = validator;
  }

  validate(value: any, fieldName: string): boolean {
    if (value === undefined || value === null || value === "") {
      return true;
    }
    return this.validator.validate(value, fieldName);
  }
}
